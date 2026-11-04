import { School, Users } from "lucide-react"

import { HeroCarousel } from "@/components/HeroCarousel"

const vision2030 = [
  {
    group: "Community forests",
    icon: Users,
    forests: "1,000",
    trees: "100,000",
  },
  {
    group: "School forests",
    icon: School,
    forests: "300",
    trees: "75,000",
  },
]

const offerings = [
  {
    emoji: "🌳",
    title: "Indigenous tree seedlings",
    description: "For reforestation and water source restoration.",
  },
  {
    emoji: "🍊",
    title: "Fruit tree seedlings",
    description: "To support food security and livelihoods.",
  },
  {
    emoji: "🌼",
    title: "Ornamental plants and flowers",
    description: "For greening homes, institutions, and beautification.",
  },
  {
    emoji: "🍯",
    title: "Organic forest honey",
    description: "Harvested from indigenous little forests.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-secondary/40 py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-14">
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              A nature-inspired social enterprise, rooted in Bomet.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Little Forest Nursery Limited is a nature-inspired women owned
              social enterprise based in Bomet County, Kenya. We grow and supply
              indigenous and fruit tree seedlings and help households, schools,
              communities and institutions establish “little forests” of at
              least 100 trees. By combining tree growing, environmental
              education and practical planting support, we connect landscape
              restoration with livelihoods and the protection of water sources.
            </p>
          </div>

          <HeroCarousel />
        </div>
        <div className="mt-12">
          <p className="text-sm font-medium text-foreground">
            We specialize in the propagation and sale of:
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3 className="mt-4 text-base leading-snug font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          We help you grow your own little forest at home with a variety of
          indigenous and ornamental trees, so you can contribute to a greener,
          healthier environment from your own compound.
        </p>

        <div id="vision" className="scroll-mt-24">
          <div className="mt-12 rounded-3xl bg-[#eef3e4] p-8 sm:p-10">
            <p className="text-xl leading-relaxed text-foreground/90">
              Our Vision: To be a leader in environmental restoration by
              promoting growing of indigenous and fruit trees at households,
              communities, institutions and water sources.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-card p-8 sm:p-10">
            <p className="eyebrow">Our vision 2030</p>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-foreground/90">
              In line with the government vision of 15 billion trees by 2032,
              this is how Little Forest is contributing to this goal.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {vision2030.map(({ group, icon: Icon, forests, trees }) => (
                <div
                  key={group}
                  className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{group}</h3>

                  <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-5">
                    <div>
                      <dd className="font-serif text-3xl text-primary">
                        {forests}
                      </dd>
                      <dt className="mt-1 text-xs text-muted-foreground">
                        Little forests
                      </dt>
                    </div>
                    <div>
                      <dd className="font-serif text-3xl text-primary">
                        {trees}
                      </dd>
                      <dt className="mt-1 text-xs text-muted-foreground">
                        Trees grown
                      </dt>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}