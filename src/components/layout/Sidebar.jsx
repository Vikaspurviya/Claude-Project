import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  FileText,
  Radar,
  Building2,
  MapPin,
  BarChart3,
  ClipboardList,
  Settings,
  Building,
  Leaf,
  X,
} from "lucide-react"
import { navItems } from "../../data/mock.js"

const icons = {
  LayoutDashboard,
  FileText,
  Radar,
  Building2,
  MapPin,
  BarChart3,
  ClipboardList,
  Settings,
}

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden" onClick={onClose} aria-hidden />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col bg-sidebar text-slate-300 transition-transform duration-300 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-900/40">
              <Building className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[15px] font-extrabold leading-tight text-white">SmartCity</p>
              <p className="text-[11px] leading-tight text-slate-400">AI Complaint Management</p>
            </div>
          </div>
          <button
            className="rounded-lg p-1.5 text-slate-400 hover:bg-sidebar-hover lg:hidden"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-2 flex-1 space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = icons[item.icon]
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                      : "text-slate-300 hover:bg-sidebar-hover hover:text-white"
                  }`
                }
              >
                <Icon className="h-[18px] w-[18px]" />
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="p-3">
          <div className="rounded-2xl bg-sidebar-muted p-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <Leaf className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[13px] font-bold leading-tight text-white">Cleaner City</p>
                <p className="text-[13px] font-bold leading-tight text-white">Happier Citizens</p>
              </div>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
              Powered by AI for a better tomorrow
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
