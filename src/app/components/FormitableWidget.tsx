declare global {
  interface Window {
    FT?: {
      load: (module: string) => void;
      widgets?: {
        get: () => { open: () => void; close: () => void; toggle: () => void; };
      };
    };
  }
}

export function FormitableWidget() {
  // Widget div and script are now in index.html — nothing to render here
  return null;
}

export function openFormitableWidget() {
  if (window.FT?.widgets?.get) {
    try {
      window.FT.widgets.get().open();
      return;
    } catch { /* fall through */ }
  }
  const anchor = document.createElement('a');
  anchor.href = '#ft-open';
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
