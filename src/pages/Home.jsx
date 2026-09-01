import { Hero } from "@/components/sections/Hero"
import { Mission } from "@/components/sections/Mission"
import { Shop } from "@/components/sections/Shop"
import { SponsorTeaser } from "@/components/sections/SponsorTeaser"
import { Impact } from "@/components/sections/Impact"
import { Contact } from "@/components/sections/Contact"

export function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Shop />
      <SponsorTeaser />
      <Impact />
      <Contact />
    </>
  )
}
