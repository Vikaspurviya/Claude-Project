import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/layout/Sidebar.jsx"
import Topbar from "./components/layout/Topbar.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Complaints from "./pages/Complaints.jsx"
import AITriage from "./pages/AITriage.jsx"
import Departments from "./pages/Departments.jsx"
import MapView from "./pages/MapView.jsx"
import Analytics from "./pages/Analytics.jsx"
import Reports from "./pages/Reports.jsx"
import Settings from "./pages/Settings.jsx"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onMenu={() => setMenuOpen(true)} />
        <main className="flex-1 px-4 py-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/ai-triage" element={<AITriage />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
