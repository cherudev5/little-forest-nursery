import { Home, School, Trees } from "lucide-react"

import { cn } from "@/lib/utils"

const stats = [
  { value: "52", label: "Little forests established" },
  { value: "11,690", label: "Trees grown" },
  { value: "16", label: "Little forests in schools" },
]

const groups = [
  { title: "Households", icon: Home, forests: "36", trees: "7,690" },
  {
    title: "Schools and institutions",
    icon: School,
    forests: "16",
    trees: "4,000",
  },
  { title: "Total", icon: Trees, forests: "52", trees: "11,690", highlight: true },
]

export function ImpactSnapshot() {
  return (
    <section id="impact-so-far" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Our impact</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            Our impact so far
          </h2>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#eef3e4] p-6 text-center"
            >
              <dt className="font-serif text-4xl text-primary">{stat.value}</dt>
              <dd className="mt-2 text-sm font-medium text-foreground/80">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ title, icon: Icon, forests, trees, highlight }) => (
            <div
              key={title}
              className={cn(
                "rounded-2xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg",
                highlight
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary/30"
              )}
            >
              <span
                className={cn(
                  "flex size-11 items-center justify-center rounded-full",
                  highlight
                    ? "bg-white/15 text-primary-foreground"
                    : "bg-primary/10 text-primary"
                )}
              >
                <Icon className="size-5" />
              </span>

              <h3
                className={cn(
                  "mt-4 text-lg font-semibold",
                  highlight && "text-primary-foreground"
                )}
              >
                {title}
              </h3>

              <dl
                className={cn(
                  "mt-5 grid grid-cols-2 gap-4 border-t pt-5",
                  highlight ? "border-white/20" : "border-border"
                )}
              >
                <div>
                  <dd className="font-serif text-3xl">{forests}</dd>
                  <dt
                    className={cn(
                      "mt-1 text-xs",
                      highlight
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    )}
                  >
                    Little forests
                  </dt>
                </div>
                <div>
                  <dd className="font-serif text-3xl">{trees}</dd>
                  <dt
                    className={cn(
                      "mt-1 text-xs",
                      highlight
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    )}
                  >
                    Trees grown
                  </dt>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}