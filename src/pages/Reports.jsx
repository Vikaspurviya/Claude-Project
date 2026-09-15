import { FileText, FileSpreadsheet, FileType, Download } from "lucide-react"
import { Card, PageHeader } from "../components/ui/Primitives.jsx"
import { reports } from "../data/mock.js"

const typeMeta = {
  PDF: { icon: FileType, tone: "bg-rose-50 text-rose-600" },
  XLSX: { icon: FileSpreadsheet, tone: "bg-emerald-50 text-emerald-600" },
  CSV: { icon: FileText, tone: "bg-sky-50 text-sky-600" },
}

export default function Reports() {
  return (
    <div>
      <PageHeader
        title="Reports"
        subtitle="Generated summaries and exports for your records."
      />
      <Card className="p-2 sm:p-3">
        <ul className="divide-y divide-line">
          {reports.map((r) => {
            const meta = typeMeta[r.type] || typeMeta.PDF
            const Icon = meta.icon
            return (
              <li key={r.name} className="flex flex-wrap items-center gap-3 px-3 py-3.5">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${meta.tone}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-semibold text-ink">{r.name}</p>
                  <p className="text-[11px] text-ink-faint">
                    {r.type} • {r.size} • {r.date} • by {r.by}
                  </p>
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3.5 py-2 text-[12px] font-semibold text-ink-soft transition hover:border-primary/30 hover:text-primary">
                  <Download className="h-4 w-4" /> Download
                </button>
              </li>
            )
          })}
        </ul>
      </Card>
    </div>
  )
}
