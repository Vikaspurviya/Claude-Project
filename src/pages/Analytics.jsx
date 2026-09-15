import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { Card, PageHeader, SectionTitle } from "../components/ui/Primitives.jsx"
import { monthlyVolume, priorityBreakdown, categories } from "../data/mock.js"

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid var(--color-line)",
  fontSize: 12,
  boxShadow: "0 8px 24px -12px rgba(15,23,42,0.25)",
}

export default function Analytics() {
  return (
    <div>
      <PageHeader
        title="Analytics"
        subtitle="Trends and insights across complaints, priorities and categories."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <Card className="p-5 lg:col-span-8">
          <SectionTitle title="Complaints vs. Resolved (6 months)" />
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyVolume} margin={{ left: -18, right: 8, top: 6 }}>
                <defs>
                  <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-line)" vertical={false} />
                <XAxis dataKey="m" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area type="monotone" dataKey="complaints" stroke="#2563eb" strokeWidth={2.5} fill="url(#gA)" name="Complaints" />
                <Area type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={2.5} fill="url(#gB)" name="Resolved" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5 lg:col-span-4">
          <SectionTitle title="Priority Breakdown" />
          <div className="mt-4 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={priorityBreakdown} dataKey="value" nameKey="name" innerRadius={52} outerRadius={78} paddingAngle={2} stroke="none">
                  {priorityBreakdown.map((p) => (
                    <Cell key={p.name} fill={p.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-2 space-y-2">
            {priorityBreakdown.map((p) => (
              <li key={p.name} className="flex items-center gap-2 text-[13px]">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
                <span className="flex-1 text-ink-soft">{p.name}</span>
                <span className="font-bold text-ink tabular-nums">{p.value}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5 lg:col-span-12">
          <SectionTitle title="Complaints by Category" />
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categories} margin={{ left: -18, right: 8, top: 6 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-line)" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} interval={0} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(37,99,235,0.06)" }} />
                <Bar dataKey="count" radius={[8, 8, 0, 0]} name="Complaints">
                  {categories.map((c) => (
                    <Cell key={c.name} fill={c.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}
