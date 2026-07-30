import { sendGAEvent } from "@next/third-parties/google"

export function trackLead(formName: string) {
  sendGAEvent("event", "generate_lead", { form_name: formName })
}

export function trackContactClick(method: "phone" | "whatsapp" | "email", location: string) {
  sendGAEvent("event", "contact_click", { method, location })
}
