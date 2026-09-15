import { MessageSquare, Clock, Loader, CheckCircle2, ArrowUp, Bot } from "lucide-react"
import { Card, IconBadge } from "../ui/Primitives.jsx"
import { stats } from "../../data/mock.js"

const icons = { MessageSquare, Clock, Loader, CheckCircle2 }

function StatCard({ s }) {
  const Icon = icons[s.icon]
  return (
    <Card className="p-5">
      <div className="flex items-start gap-3">
        <IconBadge tone={s.tone} className="h-11 w-11 shrink-0">
          <Icon className="h-5 w-5" />
        </IconBadge>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-ink-soft">{s.label}</p>
          <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-ink">
            {s.value.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[12px]">
        <span className="inline-flex items-center gap-0.5 font-semibold text-emerald-600">
          <ArrowUp className="h-3.5 w-3.5" />
          {s.delta}%
        </span>
        <span className="text-ink-faint">(vs. yesterday)</span>
      </div>
    </Card>
  )
}

function TriageBanner() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-blue-900/20">
      <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
          <Bot className="h-6 w-6" />
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 pulse-ring" />
          Online
        </span>
      </div>
      <p className="mt-3 text-[15px] font-bold">AI Triage Active</p>
      <p className="mt-1 text-[12px] leading-relaxed text-white/85">
        Automatically classifying, prioritizing and routing complaints to the right department.
      </p>
    </div>
  )
}

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((s) => (
        <StatCard key={s.key} s={s} />
      ))}
      <TriageBanner />
    </div>
  )
}
