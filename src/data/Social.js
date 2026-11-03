import { buildWhatsAppLink } from "@/lib/whatsapp"

/**
 * Social links shown in the navbar (top bar on desktop, menu on mobile).
 * TODO: replace the Facebook / Instagram / X URLs with the nursery's real
 * profile links. WhatsApp already uses the number from lib/whatsapp.js.
 */
export const socialLinks = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { id: "x", label: "X (Twitter)", href: "https://x.com/" },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: buildWhatsAppLink("Hello Little Forest Nursery!"),
  },
]