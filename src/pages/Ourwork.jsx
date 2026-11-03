import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const whatWeDo = [
  {
    n: "01",
    title: "Tree nursery",
    body: "Propagate and supply quality indigenous and fruit tree seedlings suited to restoration, homesteads, farms and community projects. We are also interested in increasing the availability of indigenous species that are threatened or heavily exploited.",
  },
  {
    n: "02",
    title: "Little forests",
    body: "Support households, schools, communities and institutions to establish tree-growing spaces, with a practical model built around at least 100 trees per little forest.",
  },
  {
    n: "03",
    title: "Water-source protection",
    body: "Promote tree planting around springs, rivers and other water sources to help control soil erosion, improve water retention and safeguard these vital resources.",
  },
  {
    n: "04",
    title: "Livelihoods",
    body: "Support greener livelihoods through fruit trees, including avocado and passion fruits, and forest honey from indigenous little forests.",
  },
  {
    n: "05",
    title: "Environmental education",
    body: "Engage children, schools and community groups in hands-on tree planting, environmental stewardship and conservation.",
  },
]

const whoWeServe = [
  "Households and home gardeners",
  "Farmers",
  "Schools and other institutions",
  "Community groups",
  "Organisations implementing reforestation, water-source protection or livelihood projects",
]

const whyPartner = [
  {
    title: "A practical, measurable model",
    body: "Little forests are built around a clear starting point of at least 100 trees, with support to track them towards maturity.",
  },
  {
    title: "Environmental and livelihood value",
    body: "Tree growing can contribute to improved tree cover, water-source protection, fruit production and income opportunities.",
  },
  {
    title: "Community and school engagement",
    body: "Our work links environmental restoration with hands-on learning for children, schools and community groups.",
  },
  {
    title: "Local roots in Bomet County",
    body: "Our nursery is located along the Bomet–Kaplong highway and serves people and organisations seeking tree-growing solutions.",
  },
]

const collaboration = [
  "Indigenous tree growing",
  "Household and school little forests",
  "Spring and river restoration",
  "Environmental education",
  "Fruit-tree livelihoods programme",
  "Trees growth tracking",
]

export function OurWork() {
  return (
    <section id="our-work" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="container">
        {/* What we do */}
        <div className="max-w-2xl">
          <p className="eyebrow">Our work</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">What we do</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((item) => (
            <div
              key={item.n}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <span className="font-serif text-3xl text-primary/40">{item.n}</span>
              <h3 className="mt-3 text-lg leading-snug font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Who we serve */}
        <div className="mt-16 rounded-3xl bg-[#eef3e4] p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl">Who we serve</h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {whoWeServe.map((item) => (
              <li
                key={item}
                className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-foreground/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Why partner */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl">Why partner with Little Forest?</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {whyPartner.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-4" />
                </span>
                <div>
                  <h4 className="text-base font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration */}
        <div className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl">Potential areas for collaboration</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We welcome conversations with partners interested in supporting:
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {collaboration.map((item) => (
              <li
                key={item}
                className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="group mt-8">
            <Link to="/contact">
              Start a conversation
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}