import { Bot, Zap, Target, Timer } from "lucide-react"
import { Card, PageHeader, IconBadge } from "../components/ui/Primitives.jsx"
import AITriageInAction from "../components/dashboard/AITriageInAction.jsx"

const metrics = [
  { label: "Auto-classified", value: "96.4%", sub: "accuracy", icon: Target, tone: "blue" },
  { label: "Avg. Triage Time", value: "1.2s", sub: "per complaint", icon: Timer, tone: "violet" },
  { label: "Auto-routed Today", value: "1,082", sub: "complaints", icon: Zap, tone: "amber" },
  { label: "Manual Overrides", value: "3.6%", sub: "of total", icon: Bot, tone: "green" },
]

export default function AITriage() {
  return (
    <div>
      <PageHeader
        title="AI Triage"
        subtitle="Live view of how the AI classifies, prioritizes and routes complaints."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => {
          const Icon = m.icon
          return (
            <Card key={m.label} className="p-5">
              <IconBadge tone={m.tone} className="h-11 w-11">
                <Icon className="h-5 w-5" />
              </IconBadge>
              <p className="mt-3 text-2xl font-extrabold text-ink">{m.value}</p>
              <p className="text-[13px] font-semibold text-ink">{m.label}</p>
              <p className="text-[11px] text-ink-faint">{m.sub}</p>
            </Card>
          )
        })}
      </div>
      <div className="mt-5">
        <AITriageInAction />
      </div>
    </div>
  )
}
