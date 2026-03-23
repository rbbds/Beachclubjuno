const MICE_SCRIPT_URL = 'https://app.miceoperations.com/widget/widget.js'

// Load the MICE script once on first call
function ensureMiceScript(): Promise<void> {
  return new Promise((resolve) => {
    const existing = document.querySelector(`script[src="${MICE_SCRIPT_URL}"]`)
    if (existing) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = MICE_SCRIPT_URL
    script.async = true
    script.onload = () => resolve()
    document.body.appendChild(script)
  })
}

// Open the MICE widget popup for a given widget ID
export async function openMiceWidget(widgetId: string): Promise<void> {
  await ensureMiceScript()
  // MICE widget opens via direct navigation to the widget URL
  // The script intercepts clicks on links pointing to widget URLs
  const widgetUrl = `https://app.miceoperations.com/widget/${widgetId}`
  window.open(widgetUrl, '_blank', 'width=800,height=700,scrollbars=yes')
}
