import {  Leaf, MapPinned, TrendingUp } from "lucide-react"



const steps = [
  { n: "01", title: "Planting place recorded" },
  { n: "02", title: "Stewardship updates" },
  { n: "03", title: "A growing story" },
]

const roots = [
  { icon: Leaf, text: "Indigenous trees for biodiversity" },
  { icon: TrendingUp, text: "Farm forestry for resilient livelihoods" },
  { icon: MapPinned, text: "Progress you can see on the map" },
]

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

            <ol className="mt-10 flex flex-col gap-5">
              {steps.map((step) => (
                <li key={step.n} className="flex items-center gap-4">
                  <span className="font-serif text-2xl text-primary/40">
                    {step.n}
                  </span>
                  <span className="text-sm font-medium">{step.title}</span>
                </li>
              ))}
            </ol>

            
          </div>

          <div className="rounded-3xl bg-[#eef3e4] p-10">
            <p className="eyebrow">Rooted in Bomet</p>
            <h3 className="mt-3 text-2xl leading-tight sm:text-3xl">
              Restoration that feels close to home.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our work starts with local growers, practical planting
              knowledge, and a simple promise: every tree deserves a good
              beginning and a community that knows how to care for it.
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
