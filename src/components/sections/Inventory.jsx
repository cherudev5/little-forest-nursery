import { inventory } from "@/data/seedlings"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Inventory() {
  return (
    <section id="inventory" className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Full inventory</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            The species we raise and restore.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Beyond what's in season for the shop, this is the wider range of
            indigenous and productive trees Little Forest grows across the
            year.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inventory.map((tree) => (
            <Card key={tree.species} className="gap-4 overflow-hidden py-0">
              <img
                src={tree.image}
                alt={`${tree.species} (${tree.localName})`}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />

              <CardHeader className="gap-2 pt-5">
                <h3 className="font-serif text-xl italic leading-snug">
                  {tree.species}
                </h3>
                <Badge variant="secondary" className="w-fit">
                  {tree.localName}
                </Badge>
              </CardHeader>

              <CardContent className="flex flex-col gap-3 pb-6 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">
                    Description:{" "}
                  </span>
                  {tree.description}
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Ecological importance:{" "}
                  </span>
                  {tree.importance}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
