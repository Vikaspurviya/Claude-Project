import { LineChart, Line, ResponsiveContainer } from "recharts"
import { Clock, ArrowDown } from "lucide-react"
import { Card } from "../ui/Primitives.jsx"
import { resolutionTrend } from "../../data/mock.js"

export default function AvgResolution() {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 text-ink-soft">
        <Clock className="h-4 w-4 text-primary" />
        <span className="text-[13px] font-semibold">Avg. Resolution Time</span>
      </div>
      <div className="mt-3 flex items-end justify-between gap-4">
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-ink">2.8 days</p>
          <p className="mt-1 flex items-center gap-1 text-[12px]">
            <span className="inline-flex items-center gap-0.5 font-semibold text-emerald-600">
              <ArrowDown className="h-3.5 w-3.5" />
              32%
            </span>
            <span className="text-ink-faint">(vs. last month)</span>
          </p>
        </div>
        <div className="h-14 w-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={resolutionTrend}>
              <Line
                type="monotone"
                dataKey="v"
                stroke="var(--color-good)"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}
