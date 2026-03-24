export function setPageMeta(title: string, description: string) {
  document.title = title;
  let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
  }
  meta.content = description;
}
