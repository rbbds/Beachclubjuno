import { useEffect } from 'react';

declare global {
  interface Window {
    FT?: {
      load: (module: string) => void;
      widgets?: {
        get: () => {
          open: () => void;
          close: () => void;
          toggle: () => void;
        };
      };
    };
  }
}

export function FormitableWidget() {
  useEffect(() => {
    if (document.getElementById('formitable-sdk')) return;

    (function (d: Document, s: string, id: string, h?: () => void) {
      const ftjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://cdn.formitable.com/sdk/v1/ft.sdk.min.js';
      if (h) js.onload = h;
      ftjs.parentNode!.insertBefore(js, ftjs);
    })(document, 'script', 'formitable-sdk', function () {
      window.FT?.load('Analytics');
    });
  }, []);

  return (
    <div
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
  const tryOpen = () => {
    if (window.FT?.widgets?.get) {
      try {
        window.FT.widgets.get().open();
        return true;
      } catch (e) {
        // fall through
      }
    }
    return false;
  };

  if (tryOpen()) return;

  // Widget not ready yet — listen for the ft-widget-ready event
  const onReady = () => {
    document.removeEventListener('ft-widget-ready', onReady);
    if (!tryOpen()) {
      // Last resort: anchor fallback
      const anchor = document.createElement('a');
      anchor.href = '#ft-open';
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  };
  document.addEventListener('ft-widget-ready', onReady);

  // Safety timeout — remove listener after 5s to avoid memory leak
  setTimeout(() => document.removeEventListener('ft-widget-ready', onReady), 5000);
}
