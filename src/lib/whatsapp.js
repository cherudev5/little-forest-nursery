export const WHATSAPP_NUMBER = "+254706932437"

/**
 * Builds a wa.me link with a pre-filled, URL-encoded message.
 */
export function buildWhatsAppLink(message, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/**
 * Formats a cart's items and total into a readable WhatsApp order message.
 */
export function buildOrderMessage(items, total) {
  const lines = [
    "Hello Little Forest Nursery! I'd like to order the following seedlings:",
    "",
    ...items.map(
      (item) =>
        `• ${item.name} — ${item.qty} x KES ${item.price} = KES ${item.qty * item.price}`
    ),
    "",
    `Total: KES ${total}`,
    "",
    "Please confirm availability and how I can get these delivered or collected.",
  ]
  return lines.join("\n")
}

/**
 * Formats a sponsorship package into a readable WhatsApp inquiry message.
 */
export function buildSponsorshipMessage(pkg) {
  const lines = [
    "Hello Little Forest Nursery! I'd like to sponsor seedlings:",
    "",
    `Package: ${pkg.name}`,
    `Quantity: ${pkg.quantity}`,
    `Price: ${pkg.price}`,
    `Destination: ${pkg.destination}`,
    "",
    "Please let me know the next steps to set this up.",
  ]
  return lines.join("\n")
}
