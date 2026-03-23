import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    FT?: {
      load: (module: string) => void;
      parse: (callback?: () => void) => void;
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
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const loadSDK = () => {
      if (document.getElementById('formitable-sdk')) {
        // Script already loaded, re-parse to pick up the widget div
        window.FT?.parse();
        return;
      }

      const script = document.createElement('script');
      script.id = 'formitable-sdk';
      script.src = 'https://cdn.formitable.com/sdk/v1/ft.sdk.min.js';
      script.async = true;
      script.onload = () => {
        window.FT?.load('Analytics');
        // Give React time to render the div, then parse
        setTimeout(() => window.FT?.parse(), 100);
      };
      document.body.appendChild(script);
    };

    // Small delay to ensure the widget div is in the DOM
    const timer = setTimeout(loadSDK, 200);
    return () => clearTimeout(timer);
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
      } catch {
        // fall through
      }
    }
    return false;
  };

  if (tryOpen()) return;

  // Widget not ready yet — wait for ft-widget-ready event
  const onReady = () => {
    document.removeEventListener('ft-widget-ready', onReady);
    tryOpen();
  };
  document.addEventListener('ft-widget-ready', onReady);
  setTimeout(() => document.removeEventListener('ft-widget-ready', onReady), 5000);
}
