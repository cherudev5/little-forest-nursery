import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react"

import { cn } from "@/lib/utils"

const images = [
{
    src: "/carousel/nursery.png",
    alt: "Rows of young seedlings shaded under netting at Little Forest",
    caption: "Seedlings growing under shade",
  },
  {
    src: "/carousel/treenursey.png",
    alt: "A grower watering seedling trays in the nursery",
    caption: "Daily care in the nursery",
  },
  {
    src: "/carousel/Potting soil.png",
    alt: "Potting soil and seedling bags ready for planting day",
    caption: "Thousands of seedlings, ready to plant",
  },
  {
    src: "/carousel/background.png",
    alt: "Indigenous tree saplings lined up for a school planting project",
    caption: "Indigenous saplings for school forests",
  },
  {
    src: "/carousel/planted seedling.png",
    alt: "A newly planted seedling on a farm in Bomet County",
    caption: "Planting day in Bomet County",
  },
  {
    src: "/carousel/spring.png",
    alt: "A newly planted seedling on a farm in Bomet County",
    caption: "Spring conservation and protection of water sources",
  },
  {
    src: "/carousel/nursery2.png",
    alt: "A newly planted seedling on a farm in Bomet County",
    caption: "Seedlings growing under shade",
  },
  {
    src: "/carousel/nursery3.png",
    alt: "A newly planted seedling on a farm in Bomet County",
    caption: "Avocado seedlings growing under shade",
  },
  {
    src: "/carousel/honey.png",
    alt: "A newly planted seedling on a farm in Bomet County",
    caption: "Organic honey",
  },
  {
    src: "/carousel/billboard.png",
    alt: "A newly planted seedling on a farm in Bomet County",
    caption: "Little Forest Nursery billboard",
  },
]

const AUTOPLAY_MS = 5000

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [selected, setSelected] = React.useState(0)
  const [playing, setPlaying] = React.useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  const [hovered, setHovered] = React.useState(false)
  // index of the photo open in the full-size viewer, or null when closed
  const [viewing, setViewing] = React.useState(null)

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi])

  // Autoplay: pauses on hover/focus, while the viewer is open, or when paused by the visitor
  React.useEffect(() => {
    if (!emblaApi || !playing || hovered || viewing !== null) return
    const id = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [emblaApi, playing, hovered, viewing, selected])

  // Embla already swallows the click that ends a drag/swipe, so a plain
  // onClick only fires for a real tap or click.
  const openViewer = (i) => setViewing(i)

  const stepViewer = (dir) =>
    setViewing((i) => (i + dir + images.length) % images.length)

  const arrow =
    "absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-md ring-1 ring-white/30 backdrop-blur-md transition hover:scale-105 hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-white"

  const current = viewing !== null ? images[viewing] : null

  return (
    <div
      className="relative mx-auto w-full max-w-3xl lg:max-w-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos from Little Forest Nursery"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {/* soft tilted backdrop for depth */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-primary/10"
      />

      <div
        className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative min-w-0 flex-[0_0_100%] overflow-hidden"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
            >
              <button
                type="button"
                onClick={() => openViewer(i)}
                aria-label={`View full size: ${img.caption}`}
                className="block w-full cursor-zoom-in"
              >
                {/* slow zoom on the active slide; the base scale also trims the white borders baked into some photos */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                  className={cn(
                    "aspect-[4/3] w-full scale-110 object-cover transition-transform duration-[6000ms] ease-out lg:aspect-[5/4]",
                    selected === i && "scale-[1.18]",
                  )}
                />
              </button>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-6 pt-24 pb-5">
                <p className="max-w-[70%] text-sm leading-snug font-medium text-white drop-shadow sm:text-base">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* slide counter */}
      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-md">
        {String(selected + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </span>

      {/* play / pause */}
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause slideshow" : "Play slideshow"}
        className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
      >
        {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
      </button>

      <button
        type="button"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        aria-label="Previous photo"
        className={cn(arrow, "left-4")}
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        aria-label="Next photo"
        className={cn(arrow, "right-4")}
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute right-6 bottom-6 flex items-center gap-2">
        {images.map((img, i) => (
          <button
            type="button"
            key={img.src}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={selected === i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              selected === i
                ? "w-6 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/80",
            )}
          />
        ))}
      </div>

      {/* Full-size viewer: the whole, uncropped photo at its original size
          (never upscaled; shrinks only if it is bigger than the screen) */}
      <Dialog.Root
        open={viewing !== null}
        onOpenChange={(open) => !open && setViewing(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/90" />
          <Dialog.Content
            aria-describedby={undefined}
            onClick={(e) => {
              if (e.target === e.currentTarget) setViewing(null)
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") stepViewer(-1)
              if (e.key === "ArrowRight") stepViewer(1)
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 p-4 outline-none sm:p-8"
          >
            <Dialog.Title className="sr-only">
              {current?.caption ?? "Photo"}
            </Dialog.Title>

            {current && (
              <>
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  className="h-auto max-h-[80svh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                />
                <p className="text-center text-sm font-medium text-white/90">
                  {current.caption}
                  <span className="ml-3 text-white/60">
                    {viewing + 1} / {images.length}
                  </span>
                </p>
              </>
            )}

            <Dialog.Close
              aria-label="Close"
              className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="size-5" />
            </Dialog.Close>
            <button
              type="button"
              onClick={() => stepViewer(-1)}
              aria-label="Previous photo"
              className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white sm:left-6"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => stepViewer(1)}
              aria-label="Next photo"
              className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white sm:right-6"
            >
              <ChevronRight className="size-5" />
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}