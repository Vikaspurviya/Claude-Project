import { useState } from "react"
import { Card, PageHeader } from "../components/ui/Primitives.jsx"

function Toggle({ on, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${on ? "bg-primary" : "bg-slate-300"}`}
      role="switch"
      aria-checked={on}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${on ? "left-[22px]" : "left-0.5"}`}
      />
    </button>
  )
}

const prefsInit = [
  { key: "autoRoute", label: "Auto-route complaints", desc: "Let AI Triage assign complaints to departments automatically.", on: true },
  { key: "highAlert", label: "High-priority alerts", desc: "Get notified instantly when a high-priority complaint arrives.", on: true },
  { key: "digest", label: "Daily email digest", desc: "Receive a summary of complaint activity every morning.", on: false },
  { key: "sla", label: "SLA breach warnings", desc: "Warn when a complaint is approaching its SLA deadline.", on: true },
]

export default function Settings() {
  const [prefs, setPrefs] = useState(prefsInit)
  const toggle = (key) => setPrefs((p) => p.map((x) => (x.key === key ? { ...x, on: !x.on } : x)))

  return (
    <div>
      <PageHeader title="Settings" subtitle="Manage your profile and triage preferences." />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <img src="https://i.pravatar.cc/120?img=13" alt="Vikas Thakur" className="h-20 w-20 rounded-2xl object-cover" />
            <p className="mt-3 text-[15px] font-bold text-ink">Vikas Thakur</p>
            <p className="text-[12px] text-ink-faint">Operator • Bhopal Municipal Corp.</p>
          </div>
          <dl className="mt-5 space-y-3 text-[13px]">
            <Row label="Email" value="vikas@smartcity.gov" />
            <Row label="Role" value="Triage Operator" />
            <Row label="Region" value="Bhopal, MP" />
            <Row label="Member since" value="Jan 2025" />
          </dl>
        </Card>

        <Card className="p-5 lg:col-span-2">
          <h2 className="text-[15px] font-bold text-ink">Preferences</h2>
          <ul className="mt-4 space-y-4">
            {prefs.map((p) => (
              <li key={p.key} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] font-semibold text-ink">{p.label}</p>
                  <p className="text-[12px] text-ink-soft">{p.desc}</p>
                </div>
                <Toggle on={p.on} onClick={() => toggle(p.key)} />
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-end gap-2">
            <button className="rounded-xl border border-line bg-surface px-4 py-2.5 text-[13px] font-semibold text-ink-soft hover:bg-surface-muted">
              Cancel
            </button>
            <button className="rounded-xl bg-primary px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-line pb-2.5">
      <dt className="text-ink-faint">{label}</dt>
      <dd className="font-semibold text-ink">{value}</dd>
    </div>
  )
}
