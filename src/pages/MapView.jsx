import { MapPin } from "lucide-react"
import { Card, PageHeader } from "../components/ui/Primitives.jsx"
import Heatmap from "../components/dashboard/Heatmap.jsx"
import { wardHotspots } from "../data/mock.js"

export default function MapView() {
  return (
    <div>
      <PageHeader
        title="Map View"
        subtitle="Geographic distribution of complaints across the city."
      />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <Heatmap />
        </div>
        <div className="xl:col-span-4">
          <Card className="p-5">
            <h2 className="text-[15px] font-bold text-ink">Top Ward Hotspots</h2>
            <ul className="mt-3 space-y-2.5">
              {wardHotspots.map((w, i) => (
                <li key={w.ward} className="flex items-center gap-3 rounded-xl border border-line p-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-[13px] font-bold text-rose-600">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1 text-[13px] font-semibold text-ink">
                      <MapPin className="h-3.5 w-3.5 text-ink-faint" /> {w.ward}
                    </p>
                    <p className="text-[11px] text-ink-faint">Top issue: {w.top}</p>
                  </div>
                  <span className="text-[13px] font-bold text-ink tabular-nums">{w.count}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
