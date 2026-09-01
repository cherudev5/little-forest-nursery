import * as React from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  HeartHandshake,
  MessageCircleQuestion,
  Phone,
  ShoppingBasket,
  Sprout,
  X,
} from "lucide-react"

import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    id: "purchase",
    question: "How do I purchase seedlings?",
    answer:
      "Select your desired seedlings from the nursery shop, go to the basket icon, and set the quantities you want. Check your total, then checkout to WhatsApp to finish the transaction and arrange delivery of your seedlings.",
    action: { type: "cart", label: "Open your basket", icon: ShoppingBasket },
  },
  {
    id: "sponsor",
    question: "What is seedling sponsoring?",
    answer:
      "Sponsoring means choosing to support Little Forest by buying seedlings that are given to community-based organizations (CBOs), planted in institutions like schools, or given to farmers.",
    action: {
      type: "link",
      to: "/sponsor",
      label: "See sponsor a seedling",
      icon: HeartHandshake,
    },
  },
  {
    id: "contact",
    question: "How do I contact you for more info?",
    answer:
      "You can reach our team directly for anything else you'd like to know — our contact details, map, and message form are all in one place.",
    action: {
      type: "link",
      to: "/#contact",
      label: "Go to contact section",
      icon: Phone,
    },
  },
]

export function ChatWidget() {
  const [open, setOpen] = React.useState(false)
  const [answeredIds, setAnsweredIds] = React.useState([])
  const { openCart } = useCart()
  const scrollRef = React.useRef(null)

  const answered = faqs.filter((f) => answeredIds.includes(f.id))
  const remaining = faqs.filter((f) => !answeredIds.includes(f.id))

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [answeredIds, open])

  const handleAsk = (faq) => {
    setAnsweredIds((prev) => [...prev, faq.id])
  }

  const handleAction = (action) => {
    if (action.type === "cart") {
      openCart()
    }
    setOpen(false)
  }

  return (
    <div className="fixed bottom-5 left-5 z-40">
      {open && (
        <div className="mb-3 flex h-[28rem] w-[calc(100vw-6rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-white/15">
                <Sprout className="size-4" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-none">
                  Little Forest help
                </p>
                <p className="mt-1 text-[11px] text-primary-foreground/80">
                  Common questions, answered
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-primary-foreground/80 hover:bg-white/15 hover:text-primary-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-3.5 py-2.5 text-sm text-secondary-foreground">
                Hi! I'm here to answer a few common questions. Pick one below
                to get started.
              </div>

              {answered.map((faq) => (
                <React.Fragment key={faq.id}>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-sm text-primary-foreground">
                    {faq.question}
                  </div>
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-secondary px-3.5 py-2.5 text-sm text-secondary-foreground">
                    <p>{faq.answer}</p>
                    {faq.action && (
                      <div className="mt-2.5">
                        {faq.action.type === "cart" ? (
                          <Button
                            size="sm"
                            onClick={() => handleAction(faq.action)}
                          >
                            <faq.action.icon className="size-3.5" />
                            {faq.action.label}
                          </Button>
                        ) : (
                          <Button size="sm" asChild>
                            <Link
                              to={faq.action.to}
                              onClick={() => handleAction(faq.action)}
                            >
                              <faq.action.icon className="size-3.5" />
                              {faq.action.label}
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {remaining.length > 0 && (
            <div className="border-t border-border p-3">
              <p className="mb-2 px-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                Quick questions
              </p>
              <div className="flex flex-col gap-1.5">
                {remaining.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleAsk(faq)}
                    className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-left text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                  >
                    {faq.question}
                    <ArrowRight className="size-3.5 shrink-0 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close help chat" : "Open help chat"}
        className="flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <MessageCircleQuestion className="size-6" />
        )}
      </button>
    </div>
  )
}
