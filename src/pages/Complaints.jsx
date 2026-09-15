import { useMemo, useState } from "react"
import { Search, Plus, Filter } from "lucide-react"
import { Card, PageHeader, PriorityBadge, StatusBadge } from "../components/ui/Primitives.jsx"
import { complaints } from "../data/mock.js"

const filters = ["All", "Pending", "In Progress", "Resolved"]

export default function Complaints() {
  const [status, setStatus] = useState("All")
  const [q, setQ] = useState("")

  const rows = useMemo(() => {
    return complaints.filter((c) => {
      const matchStatus = status === "All" || c.status === status
      const matchQ =
        !q ||
        c.title.toLowerCase().includes(q.toLowerCase()) ||
        c.id.toLowerCase().includes(q.toLowerCase()) ||
        c.ward.toLowerCase().includes(q.toLowerCase())
      return matchStatus && matchQ
    })
  }, [status, q])

  return (
    <div>
      <PageHeader
        title="Complaints"
        subtitle="Browse, filter and manage all citizen complaints."
        action={
          <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm shadow-blue-900/20 hover:bg-blue-700">
            <Plus className="h-4 w-4" /> Add New Complaint
          </button>
        }
      />

      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setStatus(f)}
                className={`rounded-lg px-3.5 py-2 text-[12px] font-semibold transition ${
                  status === f ? "bg-primary text-white" : "bg-surface-muted text-ink-soft hover:bg-slate-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search complaints..."
              className="h-10 w-full rounded-xl border border-line bg-surface pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line text-[11px] uppercase tracking-wide text-ink-faint">
                <th className="px-3 py-3 font-semibold">ID</th>
                <th className="px-3 py-3 font-semibold">Complaint</th>
                <th className="px-3 py-3 font-semibold">Category</th>
                <th className="px-3 py-3 font-semibold">Ward</th>
                <th className="px-3 py-3 font-semibold">Department</th>
                <th className="px-3 py-3 font-semibold">Priority</th>
                <th className="px-3 py-3 font-semibold">Status</th>
                <th className="px-3 py-3 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((c) => (
                <tr key={c.id} className="text-[13px] transition hover:bg-surface-muted">
                  <td className="px-3 py-3.5 font-semibold text-primary">#{c.id}</td>
                  <td className="px-3 py-3.5">
                    <p className="font-semibold text-ink">{c.title}</p>
                    <p className="text-[11px] text-ink-faint">{c.citizen}</p>
                  </td>
                  <td className="px-3 py-3.5 text-ink-soft">{c.category}</td>
                  <td className="px-3 py-3.5 text-ink-soft">{c.ward}</td>
                  <td className="px-3 py-3.5 text-ink-soft">{c.dept}</td>
                  <td className="px-3 py-3.5"><PriorityBadge level={c.priority} /></td>
                  <td className="px-3 py-3.5"><StatusBadge status={c.status} /></td>
                  <td className="px-3 py-3.5 text-ink-faint tabular-nums">{c.date}</td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-3 py-10 text-center text-sm text-ink-faint">
                    <Filter className="mx-auto mb-2 h-5 w-5" />
                    No complaints match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
