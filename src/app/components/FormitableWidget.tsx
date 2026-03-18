import { useEffect } from 'react';

declare global {
  interface Window {
    FT?: {
      load: (module?: string) => void;
      Widget?: {
        open: () => void;
        toggle: () => void;
      };
    };
  }
}

export function FormitableWidget() {
  useEffect(() => {
    // Voorkom dubbele SDK-initialisatie
    const existing = document.getElementById('formitable-sdk');
    if (existing) return;

    const script = document.createElement('script');
    script.id = 'formitable-sdk';
    script.src = 'https://cdn.formitable.com/sdk/v1/ft.sdk.min.js';
    script.async = true;
    script.onerror = () => {
      console.error('Formitable SDK kon niet worden geladen');
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="ft-widget-b2"
      data-restaurant="af51ddeb"
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
    if (window.FT?.Widget?.open) {
      window.FT.Widget.open();
      return true;
    }
    if (window.FT?.Widget?.toggle) {
      window.FT.Widget.toggle();
      return true;
    }
    // Zoek naar Formitable's geïnjecteerde toolbar button
    const btn = document.querySelector<HTMLElement>(
      '[class*="ft-"][class*="btn"], [class*="ft-"][class*="open"], [data-formitable]'
    );
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  };

  if (!tryOpen()) {
    // SDK nog niet klaar — wacht en probeer opnieuw
    setTimeout(tryOpen, 500);
  }
}
