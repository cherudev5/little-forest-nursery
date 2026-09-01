import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { WHATSAPP_NUMBER } from "@/lib/whatsapp"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Visit or get in touch</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            Come see the nursery for yourself.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We're based in Bomet County and always happy to host schools,
            farmers, and families who want to see how their seedlings are
            raised.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Little Forest Nursery location in Bomet"
                src="https://www.google.com/maps?q=Bomet,Kenya&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-4" />
                </span>
                <div className="text-sm">
                  <p className="font-medium">Find us</p>
                  <p className="text-muted-foreground">Bomet Town, Bomet County</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="size-4" />
                </span>
                <div className="text-sm">
                  <p className="font-medium">Call us</p>
                  <p className="text-muted-foreground">+254 700 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="size-4" />
                </span>
                <div className="text-sm">
                  <p className="font-medium">Email us</p>
                  <p className="text-muted-foreground">hello@littleforest.ke</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageCircle className="size-4" />
                </span>
                <div className="text-sm">
                  <p className="font-medium">Chat on WhatsApp</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    Message the nursery team
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-xl">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Ask about availability, bulk orders, or planting for a school
              or community project.
            </p>

            <div className="mt-6 grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" placeholder="Full Name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us what you'd like to plant..."
                  className="border-input flex w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
