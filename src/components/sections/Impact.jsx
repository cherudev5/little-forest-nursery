import * as React from "react"
import { Leaf, MapPinned, TrendingUp } from "lucide-react"

import { cn } from "@/lib/utils"

const steps = [
  { value: 52, title: "Little forests established" },
  { value: 11690, title: "Trees Grown", featured: true },
  { value: 16, title: "Little forests in schools" },
]

const roots = [
  { icon: Leaf, text: "Indigenous trees for biodiversity" },
  { icon: TrendingUp, text: "Farm forestry for resilient livelihoods" },
  { icon: MapPinned, text: "Progress you can see on the map" },
]

// Counts up from 0 the first time the number scrolls into view.
// Shows the final value straight away for reduced-motion visitors or
// browsers without IntersectionObserver.
function AnimatedNumber({ value, duration = 1600 }) {
  const ref = React.useRef(null)
  const [display, setDisplay] = React.useState(value)

  React.useEffect(() => {
    const node = ref.current
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!node || reduce || !("IntersectionObserver" in window)) return

    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3) // ease-out
          setDisplay(Math.round(value * eased))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    setDisplay(0)
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return <span ref={ref}>{display.toLocaleString("en-US")}</span>
}

export function Impact() {
  return (
    <section id="impact" className="py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">Impact, in view</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              Your seedlings are more than a transaction.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              With Little Forest, you can keep a living record of where your
              seedlings were planted and how they are faring. Sign in after
              you buy to follow the journey.
            </p>

            <ul className="mt-10 flex flex-col gap-4">
              {steps.map((step) => (
                <li
                  key={step.title}
                  className={cn(
                    "flex items-center gap-5 rounded-2xl border-l-8 p-5 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl sm:gap-6 sm:p-6",
                    step.featured
                      ? "border-lime-400 bg-primary text-primary-foreground shadow-primary/30"
                      : "border-primary bg-white shadow-primary/10"
                  )}
                >
                  <span
                    className={cn(
                      "min-w-[3.2ch] font-serif text-5xl leading-none font-bold tabular-nums sm:text-6xl",
                      step.featured ? "text-white" : "text-primary"
                    )}
                  >
                    <AnimatedNumber value={step.value} />
                  </span>
                  <span
                    className={cn(
                      "text-base leading-snug font-semibold sm:text-lg",
                      step.featured ? "text-primary-foreground" : "text-foreground/90"
                    )}
                  >
                    {step.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[#eef3e4] p-10">
            <p className="eyebrow">Rooted in Bomet</p>
            <h3 className="mt-3 text-2xl leading-tight sm:text-3xl">
              Restoration that feels close to home.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Households: 36 little forests and 7,690 trees grown.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Schools and institutions: 16 little forests and 4,000 trees grown.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {roots.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                    <item.icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}