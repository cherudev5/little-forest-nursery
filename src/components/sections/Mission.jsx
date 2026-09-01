import { MapPin, Route } from "lucide-react"

const pillars = [
  {
    icon: MapPin,
    title: "Raised for place",
    body: "We focus on seedlings that belong in Bomet's landscapes, from indigenous canopy trees to productive plants for home and farm.",
  },
  {
    icon: Route,
    title: "Follow the journey",
    body: "Every planting can be connected to a place, a progress update, and the people caring for it over time.",
  },
]

export function Mission() {
  return (
    <section id="mission" className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Our mission</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            A nursery is small. The change is not.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="grid gap-10 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <pillar.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-xl">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-primary/30 pl-6 font-serif text-xl leading-snug text-foreground/90 lg:text-2xl">
            "We believe restoration becomes powerful when a community can see,
            touch, and care for the trees it grows."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
