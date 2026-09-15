import { Search, Bell, ChevronDown, Menu } from "lucide-react"

export default function Topbar({ onMenu }) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-line bg-bg/80 px-4 py-3 backdrop-blur-md lg:px-8">
      <button
        className="rounded-lg p-2 text-ink-soft hover:bg-surface lg:hidden"
        onClick={onMenu}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative hidden max-w-xl flex-1 md:block">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <input
          type="search"
          placeholder="Search complaints (ID, location, keyword...)"
          className="h-11 w-full rounded-xl border border-line bg-surface pl-10 pr-16 text-sm text-ink placeholder:text-ink-faint outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-line bg-surface-muted px-1.5 py-0.5 text-[11px] font-medium text-ink-faint">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button className="relative rounded-xl border border-line bg-surface p-2.5 text-ink-soft transition hover:text-ink" aria-label="Notifications">
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        <button className="flex items-center gap-2.5 rounded-xl border border-line bg-surface p-1.5 pr-2.5 transition hover:border-primary/30">
          <img
            src="https://i.pravatar.cc/80?img=13"
            alt="Vikas Thakur"
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="hidden text-left sm:block">
            <span className="block text-[13px] font-semibold leading-tight text-ink">Vikas Thakur</span>
            <span className="block text-[11px] leading-tight text-ink-faint">Operator</span>
          </span>
          <ChevronDown className="h-4 w-4 text-ink-faint" />
        </button>
      </div>
    </header>
  )
}
