declare global {
  interface Window {
    dataLayer: unknown[][]
  }
}

function pushToDataLayer(...args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

export function trackLead(formName: string) {
  pushToDataLayer("event", "generate_lead", { form_name: formName })
}

export function trackContactClick(method: "phone" | "whatsapp" | "email", location: string) {
  pushToDataLayer("event", "contact_click", { method, location })
}
