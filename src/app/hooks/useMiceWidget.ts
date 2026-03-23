import { useEffect } from 'react'

const MICE_SCRIPT_URL = 'https://app.miceoperations.com/widget/widget.js'

export function useMiceWidget(widgetId: string) {
  useEffect(() => {
    // Prevent duplicate script injection
    const existingScript = document.querySelector(
      `script[src="${MICE_SCRIPT_URL}"]`
    )

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = MICE_SCRIPT_URL
      script.async = true
      document.body.appendChild(script)
    }
  }, [widgetId])
}
