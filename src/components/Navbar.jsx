import * as React from "react"
import { Link } from "react-router-dom"
import { HeartHandshake, Menu, ShoppingBasket, Sprout } from "lucide-react"

import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { CartSheet } from "@/components/CartSheet"

const links = [
  { label: "Our mission", to: "/#mission" },
  { label: "Shop seedlings", to: "/#nursery" },
  { label: "Our impact", to: "/#impact" },
  { label: "Visit us", to: "/#contact" },
]

export function Navbar() {
  const { count } = useCart()
  const [cartOpen, setCartOpen] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sprout className="size-5" />
          </span>
          <span className="font-serif text-lg leading-none">
            Little Forest
            <span className="block text-[10px] font-sans font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Nursery
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/sponsor"
            className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <HeartHandshake className="size-4" />
            Sponsor a seedling
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="relative"
            aria-label="Open cart"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBasket className="size-5" />
            {count > 0 && (
              <Badge className="absolute -top-2 -right-2 size-5 justify-center rounded-full p-0 text-[10px]">
                {count}
              </Badge>
            )}
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-serif text-xl">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <SheetClose asChild key={link.to}>
                    <Link
                      to={link.to}
                      className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    to="/sponsor"
                    className="flex items-center gap-1.5 rounded-md px-2 py-2.5 text-sm font-medium text-primary hover:bg-accent"
                  >
                    <HeartHandshake className="size-4" />
                    Sponsor a seedling
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </Sheet>
        </div>
      </div>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  )
}
