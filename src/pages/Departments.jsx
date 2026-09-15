import { Lightbulb, Droplets, Route, Trash2, Waves, Trees, Users } from "lucide-react"
import { Card, PageHeader } from "../components/ui/Primitives.jsx"
import { departments } from "../data/mock.js"

const icons = { Lightbulb, Droplets, Route, Trash2, Waves, Trees }

export default function Departments() {
  return (
    <div>
      <PageHeader
        title="Departments"
        subtitle="Performance and workload across all civic departments."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((d) => {
          const Icon = icons[d.icon]
          return (
            <Card key={d.name} className="p-5">
              <div className="flex items-start justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                  style={{ background: d.color }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-ink-soft">
                  {d.sla}% SLA
                </span>
              </div>
              <p className="mt-3 text-[15px] font-bold text-ink">{d.name}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-ink-soft">
                <Users className="h-3.5 w-3.5" /> Head: {d.head}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <Stat label="Staff" value={d.staff} />
                <Stat label="Active" value={d.active} />
                <Stat label="Resolved" value={d.resolved} />
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-[11px] font-medium text-ink-faint">
                  <span>SLA Compliance</span>
                  <span>{d.sla}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <span className="block h-full rounded-full" style={{ width: `${d.sla}%`, background: d.color }} />
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-surface-muted py-2.5">
      <p className="text-lg font-extrabold text-ink tabular-nums">{value}</p>
      <p className="text-[10px] font-medium uppercase tracking-wide text-ink-faint">{label}</p>
    </div>
  )
}
