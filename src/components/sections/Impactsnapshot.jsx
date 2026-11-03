import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const stats = [
  { value: "52", label: "Little forests established" },
  { value: "11,690", label: "Trees grown" },
  { value: "16", label: "Little forests in schools" },
]

const rows = [
  { group: "Households", forests: "36", trees: "7,690" },
  { group: "Schools and institutions", forests: "16", trees: "4,000" },
]

export function ImpactSnapshot() {
  return (
    <section id="impact-so-far" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Our impact</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            Our impact so far
          </h2>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#eef3e4] p-6 text-center"
            >
              <dt className="font-serif text-4xl text-primary">{stat.value}</dt>
              <dd className="mt-2 text-sm font-medium text-foreground/80">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <Table>
            <TableHeader className="bg-secondary/60">
              <TableRow>
                <TableHead className="px-6 py-4 font-semibold">Who</TableHead>
                <TableHead className="px-6 py-4 text-right font-semibold">
                  Little forests
                </TableHead>
                <TableHead className="px-6 py-4 text-right font-semibold">
                  Trees grown
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.group}>
                  <TableCell className="px-6 py-4 font-medium">
                    {row.group}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    {row.forests}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    {row.trees}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell className="px-6 py-4 font-semibold">Total</TableCell>
                <TableCell className="px-6 py-4 text-right font-semibold">
                  52
                </TableCell>
                <TableCell className="px-6 py-4 text-right font-semibold">
                  11,690
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </section>
  )
}