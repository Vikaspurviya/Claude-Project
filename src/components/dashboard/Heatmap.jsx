import { ChevronDown, Plus, Minus, LocateFixed, Maximize2 } from "lucide-react"
import { Card, SectionTitle } from "../ui/Primitives.jsx"
import { heatSpots } from "../../data/mock.js"

const levelColor = {
  high: "rgba(239,68,68,0.7)",
  medium: "rgba(245,158,11,0.65)",
  low: "rgba(34,197,94,0.6)",
}
const levelSize = { high: 64, medium: 52, low: 44 }

export default function Heatmap() {
  return (
    <Card className="flex h-full flex-col p-5">
      <SectionTitle
        title="Complaints Heatmap"
        action={
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-[12px] font-medium text-ink-soft hover:border-primary/30">
              Bhopal
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="rounded-lg border border-line bg-surface p-1.5 text-ink-soft hover:border-primary/30" aria-label="Expand">
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        }
      />

      <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl border border-line">
        <img
          src="/city-map.png"
          alt="Map of Bhopal showing complaint density"
          className="h-full min-h-[300px] w-full object-cover"
        />

        {heatSpots.map((s, i) => (
          <span
            key={i}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: levelSize[s.level],
              height: levelSize[s.level],
              background: levelColor[s.level],
            }}
          />
        ))}

        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-slate-700 drop-shadow-sm">
          Bhopal
        </p>

        <div className="absolute left-3 top-3 flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
          <button className="p-2 text-ink-soft hover:bg-surface-muted" aria-label="Zoom in">
            <Plus className="h-4 w-4" />
          </button>
          <span className="h-px bg-line" />
          <button className="p-2 text-ink-soft hover:bg-surface-muted" aria-label="Zoom out">
            <Minus className="h-4 w-4" />
          </button>
        </div>
        <button className="absolute left-3 top-24 rounded-lg border border-line bg-surface p-2 text-ink-soft shadow-sm hover:bg-surface-muted" aria-label="Locate">
          <LocateFixed className="h-4 w-4" />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full border border-line bg-surface/95 px-4 py-1.5 text-[11px] font-medium shadow-sm backdrop-blur">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" /> High
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Medium
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Low
          </span>
        </div>
      </div>
    </Card>
  )
}
