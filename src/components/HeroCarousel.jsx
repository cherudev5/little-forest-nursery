import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "",
    alt: "Rows of young seedlings shaded under netting at Little Forest",
  },
  {
    src: "",
    alt: "A grower watering seedling trays in the nursery",
  },
  {
    src: "",
    alt: "Potting soil and seedling bags ready for planting day",
  },
  {
    src: "",
    alt: "Indigenous tree saplings lined up for a school planting project",
  },
  {
    src: "",
    alt: "A newly planted seedling on a farm in Bomet County",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selected, setSelected] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi])

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      <div className="overflow-hidden rounded-3xl border border-border shadow-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div className="min-w-0 flex-[0_0_100%]" key={i}>
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/5] sm:aspect-[5/5] lg:aspect-[6/6] w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        aria-label="Previous photo"
        className="absolute top-1/2 left-4 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition hover:bg-background"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        aria-label="Next photo"
        className="absolute top-1/2 right-4 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition hover:bg-background"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              selected === i ? "w-5 bg-primary-foreground" : "w-1.5 bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
