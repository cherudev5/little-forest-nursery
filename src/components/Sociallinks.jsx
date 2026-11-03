import { MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { socialLinks } from "@/data/social"

// lucide-react no longer ships brand icons, so these are simple inline SVGs.
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
}

function FacebookIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

const icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  whatsapp: MessageCircle,
}

export function SocialLinks({ className, linkClassName }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialLinks.map(({ id, label, href }) => {
        const Icon = icons[id]
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={cn(
                "flex size-8 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary",
                linkClassName
              )}
            >
              <Icon className="size-4" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}