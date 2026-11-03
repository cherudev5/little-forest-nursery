import { ArrowRight, Leaf } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

// Swap this for any landscape photo in /public (e.g. "/hero.jpg").
const HERO_IMAGE = "/carousel/Potting soil.png"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[85svh] items-center overflow-hidden lg:min-h-[calc(100svh-6.5rem)]"
    >
      {/* Full-bleed background photo with a green overlay for text contrast */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-950/90 via-green-950/70 to-green-950/30" />

      <div className="container py-16 lg:py-24">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Leaf className="size-3.5" />
            Growing a greener future
          </span>

          <h1 className="mt-6 text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Little Forest Nursery Limited
          </h1>

          <p className="mt-4 text-xl font-medium text-green-100 sm:text-2xl">
            Growing greener, healthier communities, one little forest at a time
          </p>

          <div className="mt-8">
            <h2 className="text-sm font-bold tracking-[0.22em] text-green-200 uppercase">
              Who we are
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Little Forest Nursery Limited is a nature-inspired women owned
              social enterprise based in Bomet County, Kenya. We grow and
              supply indigenous and fruit tree seedlings and help households,
              schools, communities and institutions establish “little forests”
              of at least 100 trees. By combining tree growing, environmental
              education and practical planting support, we connect landscape
              restoration with livelihoods and the protection of water
              sources.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              asChild
              className="group shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              <Link to="/nursery">
                Choose your seedlings
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/40 bg-transparent text-white hover:bg-white/15 hover:text-white"
            >
              <Link to="/our-work">Why Little Forest</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}