const offerings = [
  {
    emoji: "🌳",
    title: "Indigenous tree seedlings",
    description:
      "For reforestation and water source restoration.",
  },
  {
    emoji: "🍊",
    title: "Fruit tree seedlings",
    description: "To support food security and livelihoods.",
  },
  {
    emoji: "🌼",
    title: "Ornamental plants and flowers",
    description:
      "For greening homes, institutions, and beautification.",
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
        <div className="max-w-2xl">
          <p className="eyebrow">About us</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            A nature-inspired social enterprise, rooted in Bomet.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Little Forest Nursery is a nature-inspired social enterprise
            rooted in Bomet County, Kenya. We are passionate about restoring
            landscapes, conserving water sources, and greening spaces — one
            seedling at a time.
          </p>
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

        <div className="mt-12 rounded-3xl bg-[#eef3e4] p-8 sm:p-10">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/90">
            We help you grow your own little forest at home with a variety of
            indigenous and ornamental trees, so you can contribute to a
            greener, healthier environment from your own compound.
          </p>
        </div>
      </div>
    </section>
  )
}
