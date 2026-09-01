import { MessageCircle, Minus, Plus, ShoppingBasket, Trash2 } from "lucide-react"

import { useCart } from "@/context/CartContext"
import { buildOrderMessage, buildWhatsAppLink } from "@/lib/whatsapp"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function CartSheet({ open, onOpenChange }) {
  const { items, removeItem, updateQty, total, clear } = useCart()

  const checkoutHref =
    items.length > 0 ? buildWhatsAppLink(buildOrderMessage(items, total)) : "#"

  const handleCheckout = () => {
    onOpenChange?.(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Your order</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center text-muted-foreground">
              <ShoppingBasket className="size-8 opacity-50" />
              <p className="text-sm">
                Your basket is empty. Choose seedlings from the nursery shop to
                get started.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-16 shrink-0 rounded-md object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium">{item.name}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      KES {item.price} / seedling
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-6 text-center text-sm">{item.qty}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                      <span className="ml-auto text-sm font-medium">
                        KES {item.price * item.qty}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter>
            <Separator className="mb-2" />
            <div className="flex items-center justify-between text-base font-medium">
              <span>Total</span>
              <span>KES {total}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Checkout opens WhatsApp with your order details so our team can
              confirm availability and delivery.
            </p>
            <Button size="lg" className="mt-2 w-full" asChild>
              <a
                href={checkoutHref}
                target="_blank"
                rel="noreferrer"
                onClick={handleCheckout}
              >
                <MessageCircle className="size-4" />
                Checkout on WhatsApp
              </a>
            </Button>
            <button
              onClick={clear}
              className="text-center text-xs text-muted-foreground underline-offset-2 hover:underline"
            >
              Clear basket
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
