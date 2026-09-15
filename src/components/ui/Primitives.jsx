export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-line bg-surface shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function SectionTitle({ title, action }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-[15px] font-bold text-ink">{title}</h2>
      {action}
    </div>
  )
}

const priorityStyles = {
  High: "bg-rose-50 text-rose-600 ring-rose-100",
  Medium: "bg-amber-50 text-amber-600 ring-amber-100",
  Low: "bg-emerald-50 text-emerald-600 ring-emerald-100",
}

export function PriorityBadge({ level }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${priorityStyles[level] || priorityStyles.Low}`}
    >
      {level}
    </span>
  )
}

const statusStyles = {
  Pending: "bg-amber-50 text-amber-700 ring-amber-100",
  "In Progress": "bg-sky-50 text-sky-700 ring-sky-100",
  Resolved: "bg-emerald-50 text-emerald-700 ring-emerald-100",
}

export function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${statusStyles[status] || statusStyles.Pending}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  )
}

const toneBg = {
  blue: "bg-blue-50 text-blue-600",
  amber: "bg-amber-50 text-amber-600",
  sky: "bg-sky-50 text-sky-600",
  green: "bg-emerald-50 text-emerald-600",
  rose: "bg-rose-50 text-rose-600",
  violet: "bg-violet-50 text-violet-600",
  cyan: "bg-cyan-50 text-cyan-600",
}

export function IconBadge({ tone = "blue", className = "", children }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-xl ${toneBg[tone] || toneBg.blue} ${className}`}>
      {children}
    </span>
  )
}

export function PageHeader({ title, subtitle, action }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-ink-soft">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
