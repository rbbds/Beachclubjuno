import { useEffect } from 'react';

declare global {
  interface Window {
    FT?: {
      load: (module: string) => void;
      Widget?: {
        open: () => void;
        toggle: () => void;
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
    const btn = document.querySelector<HTMLElement>(
      '[class*="ft-toolbar"], [class*="ft-btn"], [data-formitable]'
    );
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  };

  if (!tryOpen()) {
    setTimeout(tryOpen, 600);
  }
}
