import * as React from "react"
import { Link } from "react-router-dom"
import { ChevronDown, HeartHandshake, Menu, ShoppingBasket } from "lucide-react"

import { cn } from "@/lib/utils"
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
import { SocialLinks } from "@/components/Socials"

const aboutMenu = [
  { label: "Intro", to: "/about" },
  { label: "Vision", to: "/about#vision" },
  { label: "Mission", to: "/mission" },
]

const links = [
  { label: "Our work", to: "/our-work" },
  { label: "Our impact", to: "/impact" },
  { label: "Shop", to: "/nursery" },
]

const desktopLink =
  "text-sm font-medium text-foreground/80 transition-colors hover:text-primary"

function AboutDropdown() {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={cn("flex items-center gap-1", desktopLink)}
      >
        About us
        <ChevronDown
          className={cn("size-4 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        // pt-3 keeps the hover area continuous between the button and the panel
        <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3">
          <ul
            role="menu"
            className="min-w-44 rounded-xl border border-border bg-background p-1.5 shadow-lg"
          >
            {aboutMenu.map((item) => (
              <li key={item.label} role="none">
                <Link
                  role="menuitem"
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const { count } = useCart()
  const [cartOpen, setCartOpen] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      {/* Slim social bar: desktop only, scrolls away so only the main bar sticks */}
      <div className="hidden border-b border-border/70 bg-[#f6f4ee] lg:block">
        <div className="container flex h-10 items-center justify-end">
          <SocialLinks linkClassName="size-7 [&_svg]:size-3.5" />
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span>
              <img
                src="/logo2.png"
                alt="Little Forest Nursery Logo"
                className="h-8 w-auto object-contain md:h-9"
              />
            </span>
            <span className="font-serif text-lg leading-none">
              Little Forest
              <span className="block text-[10px] font-sans font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Nursery
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <AboutDropdown />
            {links.map((link) => (
              <Link key={link.label} to={link.to} className={desktopLink}>
                {link.label}
              </Link>
            ))}
            <Link
              to="/sponsor"
              className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <HeartHandshake className="size-4" />
              Sponsor
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="relative lg:w-auto lg:px-4"
              aria-label="Open basket"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBasket className="size-5" />
              <span className="hidden lg:inline">Basket</span>
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
                  <p className="px-2 pt-2 pb-1 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    About us
                  </p>
                  {aboutMenu.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        to={item.to}
                        className="rounded-md py-2.5 pr-2 pl-5 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}

                  {links.map((link) => (
                    <SheetClose asChild key={link.label}>
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
                      Sponsor
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <button
                      type="button"
                      onClick={() => setCartOpen(true)}
                      className="flex items-center justify-between rounded-md px-2 py-2.5 text-left text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary"
                    >
                      <span className="flex items-center gap-1.5">
                        <ShoppingBasket className="size-4" />
                        Basket
                      </span>
                      {count > 0 && (
                        <Badge className="size-5 justify-center rounded-full p-0 text-[10px]">
                          {count}
                        </Badge>
                      )}
                    </button>
                  </SheetClose>

                  <div className="mt-4 border-t border-border px-2 pt-4">
                    <SocialLinks />
                  </div>
                </nav>
              </SheetContent>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
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
    </>
  )
}