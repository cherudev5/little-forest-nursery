import { Link } from "react-router-dom"
import {
  ArrowRight,
  Check,
  Apple,
  Droplets,
  GraduationCap,
  Sprout,
  Trees,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const whatWeDo = [
  {
    n: "01",
    icon: Sprout,
    title: "Tree nursery",
    body: "Propagate and supply quality indigenous and fruit tree seedlings suited to restoration, homesteads, farms and community projects. We are also interested in increasing the availability of indigenous species that are threatened or heavily exploited.",
  },
  {
    n: "02",
    icon: Trees,
    title: "Little forests",
    body: "Support households, schools, communities and institutions to establish tree-growing spaces, with a practical model built around at least 100 trees per little forest.",
  },
  {
    n: "03",
    icon: Droplets,
    title: "Water-source protection",
    body: "Promote tree planting around springs, rivers and other water sources to help control soil erosion, improve water retention and safeguard these vital resources.",
  },
  {
    n: "04",
    icon: Apple,
    title: "Livelihoods",
    body: "Support greener livelihoods through fruit trees, including avocado and passion fruits, and forest honey from indigenous little forests.",
  },
  {
    n: "05",
    icon: GraduationCap,
    title: "Environmental education",
    body: "Engage children, schools and community groups in hands-on tree planting, environmental stewardship and conservation.",
  },
]

// On large screens the grid has 6 columns: three cards on the first row
// (2 columns each) and two wider cards on the second (3 columns each), so
// there is never an empty gap. On tablets the last card spans both columns.
const cardSpan = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "sm:col-span-2 lg:col-span-3",
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {whatWeDo.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.n}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-7 shadow-lg shadow-primary/10 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary hover:bg-primary hover:shadow-2xl hover:shadow-primary/30",
                  cardSpan[i]
                )}
              >
                {/* accent bar */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-green-500 to-lime-400"
                />
                {/* big watermark number */}
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-5 font-serif text-7xl leading-none font-bold text-primary/10 transition-colors duration-300 group-hover:text-white/15"
                >
                  {item.n}
                </span>

                <span className="relative flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-primary">
                  <Icon className="size-7" />
                </span>

                <h3 className="relative mt-5 text-xl leading-snug font-semibold transition-colors duration-300 group-hover:text-primary-foreground">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/90">
                  {item.body}
                </p>
              </div>
            )
          })}
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

        {/* Why partner
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
        </div> */}

        {/* Collaboration
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
        </div> */}
      </div>
    </section>
  )
}