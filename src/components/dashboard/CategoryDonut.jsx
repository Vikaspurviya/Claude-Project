import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChevronDown } from "lucide-react"
import { Card, SectionTitle } from "../ui/Primitives.jsx"
import { categories } from "../../data/mock.js"

export default function CategoryDonut() {
  const total = categories.reduce((a, c) => a + c.count, 0)
  return (
    <Card className="flex h-full flex-col p-5">
      <SectionTitle
        title="Complaints by Category"
        action={
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-[12px] font-medium text-ink-soft hover:border-primary/30">
            Last 7 days
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        }
      />
      <div className="mt-4 flex flex-col items-center gap-5 sm:flex-row">
        <div className="relative h-[168px] w-[168px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categories}
                dataKey="count"
                nameKey="name"
                innerRadius={58}
                outerRadius={82}
                paddingAngle={2}
                stroke="none"
              >
                {categories.map((c) => (
                  <Cell key={c.name} fill={c.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-extrabold text-ink">{total.toLocaleString()}</span>
            <span className="text-[11px] text-ink-faint">Total</span>
          </div>
        </div>

        <ul className="flex-1 space-y-2.5">
          {categories.map((c) => (
            <li key={c.name} className="flex items-center gap-2.5 text-[13px]">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: c.color }} />
              <span className="flex-1 text-ink-soft">{c.name}</span>
              <span className="font-semibold text-ink-faint tabular-nums">{c.pct}%</span>
              <span className="w-10 text-right font-bold text-ink tabular-nums">{c.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
