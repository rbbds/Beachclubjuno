import { useEffect } from 'react';

/**
 * Formitable Reserveringswidget Component
 * 
 * TODO: Vervang data-restaurant="af51ddeb" door het Formitable restaurant-ID van Beachclub Juno.
 * Te vinden in Formitable dashboard > Instellingen > Widget.
 */
export function FormitableWidget() {
  useEffect(() => {
    // Load Formitable SDK
    const loadFormitableSDK = () => {
      // Check if script already exists
      if (document.getElementById('formitable-sdk')) {
        return;
      }

      const script = document.createElement('script');
      script.id = 'formitable-sdk';
      script.src = 'https://cdn.formitable.com/sdk/v1/ft.sdk.min.js';
      script.async = true;
      script.onload = () => {
        // Initialize Formitable Analytics after SDK loads
        if (window.FT) {
          window.FT.load('Analytics');
        }
      };

      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
      }
    };

    loadFormitableSDK();
  }, []);

  return (
    <div
      className="ft-widget-b2"
      data-restaurant="af51ddeb"
      data-open="1500"
      data-open-mobile="false"
      data-color="#cc6435"
      data-language="nl"
      data-tag="Website"
      data-toolbar="true"
      data-toolbar-mobile="true"
    />
  );
}

// TypeScript declaration for Formitable global
declare global {
  interface Window {
    FT?: {
      load: (module: string) => void;
    };
  }
}
