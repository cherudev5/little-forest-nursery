import { ArrowRight, Leaf } from "lucide-react"
import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { HeroCarousel } from "@/components/HeroCarousel"

const facts = [
  { value: "Bomet", label: "Our home county" },
  { value: "Local", label: "Raised with care" },
  { value: "Real", label: "Impact you can follow" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#eef3e4]">
      <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="container grid items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-medium text-primary">
            <Leaf className="size-3.5" />
            Growing a greener Bomet
          </span>

          <h1 className="mt-6 text-4xl text-green-900 leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            OUR VISION.
            
          </h1>

          <p className="mt-6 max-w-md text-black leading-relaxed text-xl">
           To be a leader in environmental restoration by promoting growing of indigenous and fruit trees at households, communities, institutions and water sources.
            
            
          </p >
          <Link to="/contact" className=" mt-6 inline-block text-xl font-semibold text-slate-800 hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200 ease-in-out cursor-pointer">
          Let’s grow together. Reach us today, contact on our Bio
          
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              asChild
              className="group animate-bounce shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
              >
              <Link to="/nursery">
              Choose your seedlings
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link to="/mission">Why Little Forest</Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-primary/15 pt-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-serif text-2xl text-primary">{fact.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroCarousel />
      </div>
    </section>
  )
}
