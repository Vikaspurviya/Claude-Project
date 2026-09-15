import { ArrowRight, Lightbulb, Droplets, Trash2, Route, Waves } from "lucide-react"
import { Card, PriorityBadge, IconBadge } from "../ui/Primitives.jsx"
import { recentComplaints } from "../../data/mock.js"

const icons = { Lightbulb, Droplets, Trash2, Route, Waves }

export default function RecentComplaints() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-ink">Recent Complaints</h2>
        <button className="inline-flex items-center gap-1 text-[12px] font-semibold text-primary hover:underline">
          View All <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <ul className="mt-3 divide-y divide-line">
        {recentComplaints.map((c) => {
          const Icon = icons[c.icon]
          return (
            <li key={c.id} className="flex items-center gap-3 py-3">
              <IconBadge tone={c.tone} className="h-10 w-10 shrink-0">
                <Icon className="h-[18px] w-[18px]" />
              </IconBadge>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-ink">{c.title}</p>
                <p className="mt-0.5 truncate text-[11px] text-ink-faint">
                  #{c.id} &nbsp;|&nbsp; {c.ward}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <PriorityBadge level={c.priority} />
                <span className="text-[10px] text-ink-faint">{c.ago}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
