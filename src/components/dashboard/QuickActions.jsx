import { Plus, ImagePlus, Mic, Search } from "lucide-react"
import { Card } from "../ui/Primitives.jsx"

const actions = [
  { label: "Add New Complaint", icon: Plus, className: "bg-primary text-white hover:bg-blue-700 shadow-sm shadow-blue-900/20" },
  { label: "Upload via Image", icon: ImagePlus, className: "bg-violet-50 text-violet-600 hover:bg-violet-100" },
  { label: "Upload via Voice", icon: Mic, className: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100" },
  { label: "Track Complaint", icon: Search, className: "bg-amber-50 text-amber-600 hover:bg-amber-100" },
]

export default function QuickActions() {
  return (
    <Card className="p-5">
      <h2 className="text-[15px] font-bold text-ink">Quick Actions</h2>
      <div className="mt-3 space-y-2.5">
        {actions.map((a) => {
          const Icon = a.icon
          return (
            <button
              key={a.label}
              className={`flex w-full items-center gap-2.5 rounded-xl px-4 py-3 text-[13px] font-semibold transition ${a.className}`}
            >
              <Icon className="h-4 w-4" />
              {a.label}
            </button>
          )
        })}
      </div>
    </Card>
  )
}
