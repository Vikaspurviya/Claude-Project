import { ChevronDown, Lightbulb, Droplets, Route, Trash2, Waves } from "lucide-react"
import { Card, SectionTitle, IconBadge } from "../ui/Primitives.jsx"
import { departmentPerformance } from "../../data/mock.js"

const icons = { Lightbulb, Droplets, Route, Trash2, Waves }
const tones = { Electrical: "amber", "Water Supply": "sky", Roads: "violet", Sanitation: "green", Drainage: "cyan" }

export default function DepartmentPerformance() {
  return (
    <Card className="p-5">
      <SectionTitle
        title="Department Performance"
        action={
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-[12px] font-medium text-ink-soft hover:border-primary/30">
            This Week
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        }
      />
      <ul className="mt-4 space-y-4">
        {departmentPerformance.map((d) => {
          const Icon = icons[d.icon]
          return (
            <li key={d.name} className="flex items-center gap-3">
              <IconBadge tone={tones[d.name]} className="h-9 w-9 shrink-0">
                <Icon className="h-4 w-4" />
              </IconBadge>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="font-semibold text-ink">{d.name}</span>
                  <span className="font-bold text-ink tabular-nums">{d.pct}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <span
                    className="block h-full rounded-full"
                    style={{ width: `${d.pct}%`, background: d.color }}
                  />
                </div>
              </div>
              <span className="w-16 shrink-0 text-right text-[11px] font-medium text-ink-faint tabular-nums">
                {d.done}/{d.total}
              </span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
