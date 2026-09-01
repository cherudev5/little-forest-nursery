import { MessageCircle } from "lucide-react"

import { WHATSAPP_NUMBER } from "@/lib/whatsapp"

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Little Forest Nursery on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" fill="currentColor" strokeWidth={0} />
    </a>
  )
}
