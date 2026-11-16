
export function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-primary/[0.06] py-24 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-primary/15 bg-background/80 px-7 py-12 shadow-xl shadow-primary/5 backdrop-blur-sm sm:px-12 sm:py-16 lg:px-20 lg:py-20">

            {/* Section title */}
            <div className="mb-10 text-center">
              <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-primary" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Our Mission
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Growing little forests.
                <span className="block text-primary">
                  Creating lasting impact.
                </span>
              </h2>
            </div>

            {/* Mission statement */}
            <blockquote className="mx-auto max-w-3xl text-center font-serif text-lg leading-relaxed text-foreground/80 sm:text-xl lg:text-2xl lg:leading-relaxed">
              "To help households, communities and institutions grow
              little forests of at least 100 trees by providing quality
              tree and fruit seedlings, planting guidance, and support
              to nurture and track trees to maturity. Through this work,
              we aim to create livelihood opportunities, increase tree
              cover, and protect forests and water sources for future
              generations."
            </blockquote>

            {/* Bottom accent */}
            <div className="mt-10 flex justify-center">
              <span className="h-1 w-20 rounded-full bg-primary/30" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
