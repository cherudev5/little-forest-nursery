import { ArrowRight, HeartHandshake } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function SponsorTeaser() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-primary px-8 py-10 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/15">
              <HeartHandshake className="size-5" />
            </span>
            <div>
              <h2 className="text-2xl leading-tight">
                Sponsor a seedling for a school or CBO.
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-primary-foreground/85">
                Fund seedlings that get planted with partner schools and
                community groups across Bomet, and see the stories they've
                grown so far.
              </p>
            </div>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="w-full shrink-0 sm:w-auto"
            asChild
          >
            <Link to="/sponsor">
              Explore sponsorships
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
