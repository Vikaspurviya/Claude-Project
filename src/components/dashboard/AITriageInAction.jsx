import {
  User,
  ScanSearch,
  Tags,
  MapPinned,
  ArrowRight,
  Lightbulb,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react"
import { Card } from "../ui/Primitives.jsx"
import { liveActivity } from "../../data/mock.js"

const steps = [
  { icon: ScanSearch, title: "Analyzing", sub: "NLP + Location" },
  { icon: Tags, title: "Classifying", sub: "Electrical" },
  { icon: MapPinned, title: "Routing", sub: "Ward 18" },
]

const dotTone = {
  green: "bg-emerald-500",
  amber: "bg-amber-500",
  violet: "bg-violet-500",
  blue: "bg-blue-500",
}

export default function AITriageInAction() {
  return (
    <Card className="flex h-full flex-col p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-[15px] font-bold text-ink">AI Triage in Action</h2>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-ring" />
            Live
          </span>
        </div>
        <button className="inline-flex items-center gap-1 text-[12px] font-semibold text-primary hover:underline">
          View All <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Voice complaint bubble + pipeline */}
      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-start gap-3 rounded-2xl border border-line bg-surface-muted p-3.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <User className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] leading-relaxed text-ink">
              &quot;Hamare area ki street light 3 din se kharab hai, Ward 18, Bhopal.&quot;
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex h-5 flex-1 items-end gap-0.5 overflow-hidden">
                {Array.from({ length: 34 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-0.5 flex-1 origin-bottom rounded-full bg-blue-400/70"
                    style={{
                      height: `${20 + Math.abs(Math.sin(i * 0.9)) * 80}%`,
                      animation: "equalize 1.1s ease-in-out infinite",
                      animationDelay: `${i * 0.045}s`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[11px] font-medium tabular-nums text-ink-faint">0:12</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1 lg:justify-start">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="flex items-center gap-1">
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-semibold leading-tight text-ink">{s.title}</span>
                  <span className="text-[10px] leading-tight text-ink-faint">{s.sub}</span>
                </div>
                {i < steps.length - 1 && <ArrowRight className="mb-6 h-4 w-4 text-ink-faint" />}
              </div>
            )
          })}
        </div>
      </div>

      {/* Result row */}
      <div className="mt-4 rounded-2xl border border-line p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
            <Lightbulb className="h-4.5 w-4.5" />
          </span>
          <span className="text-[14px] font-bold text-ink">Street Light</span>
          <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-600 ring-1 ring-inset ring-rose-100">
            High Priority
          </span>
          <button className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-[12px] font-semibold text-white shadow-sm shadow-blue-900/20 transition hover:bg-blue-700">
            <MapPin className="h-3.5 w-3.5" />
            View on Map
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Meta label="Department" value="Electrical Department" />
          <Meta label="Location" value="Ward 18, Bhopal" icon={<MapPin className="h-3.5 w-3.5 text-ink-faint" />} />
          <Meta label="Estimated SLA" value="3 Days" icon={<Clock className="h-3.5 w-3.5 text-ink-faint" />} />
        </div>
      </div>

      {/* Live activity */}
      <div className="mt-5">
        <p className="text-[13px] font-bold text-ink">Live Activity</p>
        <div className="mt-3 grid gap-4 lg:grid-cols-[1fr_auto]">
          <ol className="relative space-y-3.5 pl-4">
            <span className="absolute left-[3px] top-1 bottom-1 w-px bg-line" />
            {liveActivity.map((a, i) => (
              <li key={i} className="relative flex items-start gap-2.5">
                <span className={`absolute -left-4 top-1 h-2 w-2 rounded-full ${dotTone[a.tone]}`} />
                <span className="text-[11px] font-semibold tabular-nums text-ink-faint">{a.time}</span>
                <span className="text-[12px] leading-snug text-ink-soft">{a.text}</span>
              </li>
            ))}
          </ol>
          <div className="flex items-start gap-2.5 self-start rounded-2xl bg-emerald-50 p-3.5 lg:max-w-[220px]">
            <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-500" />
            <div>
              <p className="text-[12px] font-bold text-emerald-700">Complaint routed successfully!</p>
              <p className="mt-0.5 text-[11px] leading-snug text-emerald-600/80">
                The concerned department has been notified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function Meta({ label, value, icon }) {
  return (
    <div>
      <p className="text-[11px] font-medium text-ink-faint">{label}</p>
      <p className="mt-1 flex items-center gap-1 text-[13px] font-semibold text-ink">
        {icon}
        {value}
      </p>
    </div>
  )
}
