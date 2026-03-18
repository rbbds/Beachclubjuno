Make the following two changes to fix the Formitable reservation widget.

---

### Change 1: src/app/components/FormitableWidget.tsx

Replace the entire file with this version. The key fix is that we use a native DOM click handler to open the widget, instead of relying on data-formitable="open" which doesn't work reliably with React's synthetic events.

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    FT?: {
      load: (module: string) => void;
      Widget?: {
        open: () => void;
      };
    };
  }
}

export function FormitableWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const initStarted = useRef(false);

  useEffect(() => {
    if (initStarted.current) return;
    initStarted.current = true;

    const initSDK = () => {
      if (document.getElementById('formitable-sdk')) {
        if (window.FT) window.FT.load('Analytics');
        return;
      }

      const script = document.createElement('script');
      script.id = 'formitable-sdk';
      script.src = 'https://cdn.formitable.com/sdk/v1/ft.sdk.min.js';
      script.async = true;
      script.onload = () => {
        if (window.FT) window.FT.load('Analytics');
      };
      document.head.appendChild(script);
    };

    const timer = setTimeout(initSDK, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={widgetRef}
      className="ft-widget-b2"
      data-restaurant="af51ddeb"
      data-open="false"
      data-open-mobile="false"
      data-color="#cc6435"
      data-language="nl"
      data-tag="Website"
      data-toolbar="true"
      data-toolbar-mobile="true"
    />
  );
}

export function openFormitableWidget() {
  // Method 1: use FT.Widget.open() if available
  if (window.FT?.Widget?.open) {
    window.FT.Widget.open();
    return;
  }
  // Method 2: find the toolbar button and click it natively
  const toolbarBtn = document.querySelector('.ft-toolbar-btn, [class*="ft-toolbar"], [class*="formitable-btn"]') as HTMLElement;
  if (toolbarBtn) {
    toolbarBtn.click();
    return;
  }
  // Method 3: dispatch a native click on the widget div
  const widget = document.querySelector('.ft-widget-b2') as HTMLElement;
  if (widget) {
    widget.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  }
}

---

### Change 2: src/app/components/Navigation.tsx

At the top of the file, add this import after the existing imports:

import { openFormitableWidget } from './FormitableWidget';

Then find the desktop "Reserveren" button:

<button 
  data-formitable="open"
  className="bg-[#cc6435] text-[#f6f4db] px-6 py-2.5 rounded-lg hover:bg-[#b55730] transition-colors cursor-pointer"
>
  Reserveren
</button>

Replace it with:

<button 
  onClick={() => openFormitableWidget()}
  className="bg-[#cc6435] text-[#f6f4db] px-6 py-2.5 rounded-lg hover:bg-[#b55730] transition-colors cursor-pointer"
>
  Reserveren
</button>

Then find the mobile "Reserveren" button at the bottom of the slide-in panel:

<button 
  data-formitable="open"
  className="w-full bg-[#cc6435] text-white rounded-lg py-4 hover:bg-[#b55730] transition-colors cursor-pointer"
  style={{ fontFamily: 'Museo, sans-serif', fontSize: '1rem', fontWeight: 500 }}
>
  Reserveren
</button>

Replace it with:

<button 
  onClick={() => { setIsMenuOpen(false); setTimeout(openFormitableWidget, 300); }}
  className="w-full bg-[#cc6435] text-white rounded-lg py-4 hover:bg-[#b55730] transition-colors cursor-pointer"
  style={{ fontFamily: 'Museo, sans-serif', fontSize: '1rem', fontWeight: 500 }}
>
  Reserveren
</button>

Do not change any other files.