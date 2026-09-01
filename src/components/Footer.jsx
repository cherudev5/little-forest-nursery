import { Link } from "react-router-dom"
import { AtSign, MessageCircle, Sprout } from "lucide-react"

import { Separator } from "@/components/ui/separator"

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Our mission", to: "/#mission" },
      { label: "Shop seedlings", to: "/#nursery" },
      { label: "Our impact", to: "/#impact" },
      { label: "Sponsor a seedling", to: "/sponsor" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Contact & map", to: "/#contact" },
      { label: "Bomet Town, Bomet County", to: "/#contact" },
      { label: "0706932437", to: "0706932437", external: true },
      { label: "hello@littleforest.ke", to: "mailto:hello@littleforest.ke", external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#f6f4ee]">
      <div className="container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sprout className="size-5" />
              </span>
              <span className="font-serif text-lg">Little Forest Nursery</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A community nursery in Bomet County helping families, farms,
              and schools grow a greener future, one seedling at a time.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[AtSign, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="mailto:hello@littleforest.ke"
                  aria-label="Contact link"
                  className="flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) =>
                  link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Little Forest Nursery. Bomet County, Kenya.</p>
          <p>Raised with care, rooted in community.</p>
        </div>
      </div>
    </footer>
  )
}
