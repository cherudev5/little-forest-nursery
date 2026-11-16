import * as React from "react"

// Drop each partner's official logo into /public/partners/ using these file
// names (PNG, SVG or WebP all work if you update the extension below).
// Until a file exists, a neat text badge is shown instead.
const partners = [
  {
    short: "KFS",
    name: "Kenya Forest Service",
    logo: "/partners/kfs.png",
  },
  {
    short: "KEFRI",
    name: "Kenya Forestry Research Institute",
    logo: "/partners/kefri.png",
  },
  {
    short: "CDF",
    name: "Constituency Development Fund",
    logo: "/partners/cdf.png",
  },
]

function PartnerLogo({ partner }) {
  const [failed, setFailed] = React.useState(false)

  return (
    <div className="flex min-h-32 w-full min-w-44 flex-col items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-center shadow-lg ring-1 ring-black/5 transition duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl sm:w-56">
      {failed ? (
        <span className="font-serif text-3xl leading-none text-primary">
          {partner.short}
        </span>
      ) : (
        <img
          src={partner.logo}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-14 w-auto max-w-full object-contain"
        />
      )}
      {/* partner name is always visible under the logo */}
      <span className="text-xs leading-tight font-semibold text-foreground/80">
        {partner.name}
      </span>
    </div>
  )
}

export function Partners() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="relative overflow-hidden bg-primary py-10 text-primary-foreground lg:py-12"
    >
      {/* soft glow so the white logo cards pop against the green */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 size-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="container relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
        <div className="shrink-0 text-center lg:max-w-xs lg:text-left">
          <p className="text-[10px] font-bold tracking-[0.22em] text-green-200 uppercase">
            Our partners
          </p>
          <h2
            id="partners-heading"
            className="mt-2 text-xl leading-snug text-primary-foreground sm:text-2xl"
          >
            Working together for a greener Kenya
          </h2>
        </div>

        <ul className="flex w-full flex-col items-stretch gap-5 sm:w-auto sm:flex-row sm:flex-nowrap sm:items-center sm:justify-center lg:gap-6">
          {partners.map((partner) => (
            <li key={partner.short} className="flex">
              <PartnerLogo partner={partner} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}