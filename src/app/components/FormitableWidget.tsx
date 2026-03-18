import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    FT?: {
      load: (module: string) => void;
    };
  }
}

export function FormitableWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const initStarted = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (initStarted.current) return;
    initStarted.current = true;

    const initSDK = () => {
      // Check if SDK script already exists
      const existingScript = document.getElementById('formitable-sdk');
      
      if (existingScript) {
        // Script already loaded, just initialize if FT is available
        if (window.FT) {
          window.FT.load('Analytics');
        }
        return;
      }

      // Create and inject the SDK script
      const script = document.createElement('script');
      script.id = 'formitable-sdk';
      script.src = 'https://cdn.formitable.com/sdk/v1/ft.sdk.min.js';
      script.async = true;
      script.onload = () => {
        if (window.FT) {
          window.FT.load('Analytics');
        }
      };
      script.onerror = () => {
        console.error('Failed to load Formitable SDK');
      };

      // Safely append to head
      try {
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error appending Formitable SDK script:', error);
      }
    };

    // Small delay to ensure React has fully rendered the widget div
    const timer = setTimeout(initSDK, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
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
