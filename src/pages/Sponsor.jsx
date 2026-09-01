import { HeartHandshake, Lock, MapPin, MessageCircle, School, Sprout, Users } from "lucide-react"

import { sponsorPackages, sponsorStories } from "@/data/sponsors"
import { buildSponsorshipMessage, buildWhatsAppLink } from "@/lib/whatsapp"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

function PackageCard({ pkg }) {
  const href = buildWhatsAppLink(buildSponsorshipMessage(pkg))

  return (
    <Card
      className={`gap-5 py-7 ${pkg.featured ? "border-primary shadow-md" : ""}`}
    >
      <CardHeader className="gap-2">
        {pkg.featured && (
          <Badge className="w-fit">Most sponsored</Badge>
        )}
        <h3 className="text-xl">{pkg.name}</h3>
        <p className="font-serif text-3xl text-primary">{pkg.price}</p>
        <p className="text-xs font-medium text-muted-foreground">
          {pkg.quantity}
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {pkg.description}
        </p>
        <p className="flex items-start gap-1.5 text-xs leading-relaxed text-foreground/80">
          <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
          {pkg.destination}
        </p>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={pkg.featured ? "default" : "outline"}
          asChild
        >
          <a href={href} target="_blank" rel="noreferrer">
            <MessageCircle className="size-4" />
            Sponsor via WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

function StoryCard({ story }) {
  return (
    <Card className="overflow-hidden py-0 gap-0">
      <div className="relative">
        <img
          src={story.image}
          alt={story.name}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        <Badge variant="secondary" className="absolute top-3 left-3 bg-white/95">
          {story.type === "School" ? (
            <School className="size-3" />
          ) : (
            <Users className="size-3" />
          )}
          {story.type}
        </Badge>
      </div>

      <CardHeader className="pt-5">
        <h3 className="text-lg leading-snug">{story.name}</h3>
        <p className="text-xs text-muted-foreground">
          {story.location} · {story.quantity} seedlings sponsored
        </p>
      </CardHeader>

      <CardContent className="pb-6">
        <blockquote className="border-l-2 border-primary/30 pl-4 text-sm leading-relaxed text-foreground/90 italic">
          "{story.quote}"
        </blockquote>
      </CardContent>
    </Card>
  )
}

export function Sponsor() {
  return (
    <>
      <section className="bg-[#eef3e4] py-16 lg:py-24">
        <div className="container">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-medium text-primary">
              <HeartHandshake className="size-3.5" />
              Sponsor a seedling
            </span>
            <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl">
              Fund a seedling. Root it in a community.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              When you sponsor a seedling, Little Forest raises it and plants
              it where it's needed most — in a partner school or with a
              community-based organization (CBO) already doing restoration
              work in Bomet County. You cover the cost of growing and
              planting; we handle the rest.
            </p>
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 lg:py-24">
        <div className="container">
          <div className="max-w-xl">
            <p className="eyebrow">Choose a sponsorship</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              Every package plants somewhere real.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-24">
        <div className="container">
          <div className="max-w-xl">
            <p className="eyebrow">Sponsor stories</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              What past sponsorships have grown.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A few of the schools and community groups who've planted with
              support from sponsors like you.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-14">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sprout className="size-7" />
            </span>
            <div>
              <p className="eyebrow">Coming soon</p>
              <h2 className="mt-2 text-2xl leading-tight sm:text-3xl">
                Track the seedlings you sponsor.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Once you've sponsored a seedling, you'll be able to see
                exactly where it was planted and follow updates on how it's
                doing over time — the same living record we're building for
                direct seedling orders.
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Lock className="size-4" />
                This requires a free account and will be added once sign-in
                is ready.
              </p>
              <Button variant="outline" size="lg" className="mt-6" disabled>
                Sign in to track a sponsorship
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
