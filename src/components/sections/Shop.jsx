import * as React from "react"
import { Check, Leaf, Plus } from "lucide-react"

import { categories, seedlings } from "@/data/seedlings"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

function SeedlingCard({ seedling }) {
  const { addItem } = useCart()
  const [added, setAdded] = React.useState(false)

  const handleAdd = () => {
    addItem(seedling, 1)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <Card className="overflow-hidden py-0 gap-0">
      <div className="relative">
        <img
          src={seedling.image}
          alt={seedling.name}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        <Badge variant="secondary" className="absolute top-3 left-3 bg-white/95">
          {seedling.category}
        </Badge>
      </div>

      <CardHeader className="gap-2 pt-5">
        <div>
          <h3 className="font-serif text-xl leading-snug">{seedling.name}</h3>
          {seedling.localName && (
            <p className="text-xs font-medium text-muted-foreground">
              {seedling.localName}
            </p>
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {seedling.description}
        </p>
        {seedling.importance && (
          <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground/90">
            <Leaf className="mt-0.5 size-3.5 shrink-0 text-primary" />
            {seedling.importance}
          </p>
        )}
      </CardHeader>

      <CardContent className="mt-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-primary">
          KES {seedling.price} / seedling
        </span>
        <span className="text-xs text-muted-foreground">
          {seedling.available} available
        </span>
      </CardContent>

      <CardFooter className="mt-5 pb-5">
        <Button className="w-full" onClick={handleAdd} variant={added ? "secondary" : "default"}>
          {added ? (
            <>
              <Check className="size-4" /> Added
            </>
          ) : (
            <>
              <Plus className="size-4" /> Add to order
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export function Shop() {
  const [active, setActive] = React.useState("All seedlings")

  const filtered =
    active === "All seedlings"
      ? seedlings
      : seedlings.filter((s) => s.category === active)

  return (
    <section id="nursery" className="bg-secondary/40 py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">The nursery shop</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              Choose what you want to grow.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Order seedlings for your home, farm, school, or community
              project. We'll confirm availability and the best way to get
              them to you.
            </p>
          </div>

          <Tabs value={active} onValueChange={setActive}>
            <TabsList className="flex-wrap h-auto">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="whitespace-nowrap">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((seedling) => (
            <SeedlingCard key={seedling.id} seedling={seedling} />
          ))}
        </div>
      </div>
    </section>
  )
}
