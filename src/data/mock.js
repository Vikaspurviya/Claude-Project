export const stats = [
  { key: "total", label: "Total Complaints", value: 1248, delta: 12, up: true, icon: "MessageSquare", tone: "blue" },
  { key: "pending", label: "Pending", value: 312, delta: 8, up: true, icon: "Clock", tone: "amber" },
  { key: "progress", label: "In Progress", value: 498, delta: 15, up: true, icon: "Loader", tone: "sky" },
  { key: "resolved", label: "Resolved", value: 438, delta: 20, up: true, icon: "CheckCircle2", tone: "green" },
]

export const categories = [
  { name: "Garbage / Sanitation", pct: 28, count: 349, color: "var(--color-cat-garbage)" },
  { name: "Road Damage", pct: 18, count: 224, color: "var(--color-cat-road)" },
  { name: "Water Leakage", pct: 15, count: 187, color: "var(--color-cat-water)" },
  { name: "Street Light", pct: 12, count: 150, color: "var(--color-cat-street)" },
  { name: "Drainage", pct: 10, count: 125, color: "var(--color-cat-drain)" },
  { name: "Others", pct: 7, count: 87, color: "var(--color-cat-other)" },
]

export const recentComplaints = [
  { id: "CMP-1048", title: "Street Light not working", ward: "Ward 12, Bhopal", ago: "2 min ago", priority: "High", icon: "Lightbulb", tone: "rose" },
  { id: "CMP-1047", title: "Water leakage in pipeline", ward: "Ward 5, Bhopal", ago: "12 min ago", priority: "Medium", icon: "Droplets", tone: "sky" },
  { id: "CMP-1046", title: "Garbage not collected", ward: "Ward 7, Bhopal", ago: "18 min ago", priority: "Low", icon: "Trash2", tone: "green" },
  { id: "CMP-1045", title: "Road pothole", ward: "Ward 22, Bhopal", ago: "25 min ago", priority: "Medium", icon: "Route", tone: "violet" },
  { id: "CMP-1044", title: "Drainage blockage", ward: "Ward 16, Bhopal", ago: "32 min ago", priority: "High", icon: "Waves", tone: "cyan" },
]

export const departmentPerformance = [
  { name: "Electrical", pct: 92, done: 210, total: 230, color: "var(--color-cat-drain)", icon: "Lightbulb" },
  { name: "Water Supply", pct: 86, done: 178, total: 206, color: "var(--color-cat-water)", icon: "Droplets" },
  { name: "Roads", pct: 78, done: 156, total: 200, color: "var(--color-cat-street)", icon: "Route" },
  { name: "Sanitation", pct: 71, done: 142, total: 200, color: "var(--color-cat-garbage)", icon: "Trash2" },
  { name: "Drainage", pct: 68, done: 125, total: 184, color: "var(--color-cat-water)", icon: "Waves" },
]

export const liveActivity = [
  { time: "10:24 AM", text: "Complaint #CMP-1048 classified as Street Light (High Priority)", tone: "green" },
  { time: "10:24 AM", text: "Routed to Electrical Department (Ward 18)", tone: "amber" },
  { time: "10:32 AM", text: "Assigned to Rajesh Kumar (Junior Engineer)", tone: "violet" },
  { time: "10:45 AM", text: "Notification sent to concerned officer", tone: "blue" },
]

export const resolutionTrend = [
  { d: "Mon", v: 3.4 },
  { d: "Tue", v: 3.1 },
  { d: "Wed", v: 3.3 },
  { d: "Thu", v: 2.9 },
  { d: "Fri", v: 3.0 },
  { d: "Sat", v: 2.7 },
  { d: "Sun", v: 2.8 },
]

// Heatmap "hot spots" positioned as percentages within the map frame
export const heatSpots = [
  { x: 22, y: 30, level: "high" },
  { x: 40, y: 46, level: "medium" },
  { x: 30, y: 60, level: "low" },
  { x: 55, y: 26, level: "high" },
  { x: 68, y: 40, level: "medium" },
  { x: 78, y: 34, level: "high" },
  { x: 60, y: 72, level: "high" },
  { x: 46, y: 66, level: "low" },
  { x: 84, y: 58, level: "medium" },
]

export const complaints = [
  { id: "CMP-1048", title: "Street Light not working", category: "Street Light", ward: "Ward 12, Bhopal", dept: "Electrical", priority: "High", status: "Pending", date: "2026-09-15", citizen: "Amit Sharma", sla: "3 days" },
  { id: "CMP-1047", title: "Water leakage in pipeline", category: "Water Leakage", ward: "Ward 5, Bhopal", dept: "Water Supply", priority: "Medium", status: "In Progress", date: "2026-09-15", citizen: "Priya Verma", sla: "2 days" },
  { id: "CMP-1046", title: "Garbage not collected", category: "Garbage / Sanitation", ward: "Ward 7, Bhopal", dept: "Sanitation", priority: "Low", status: "Pending", date: "2026-09-15", citizen: "Rahul Jain", sla: "4 days" },
  { id: "CMP-1045", title: "Road pothole near market", category: "Road Damage", ward: "Ward 22, Bhopal", dept: "Roads", priority: "Medium", status: "In Progress", date: "2026-09-14", citizen: "Sneha Patel", sla: "5 days" },
  { id: "CMP-1044", title: "Drainage blockage", category: "Drainage", ward: "Ward 16, Bhopal", dept: "Drainage", priority: "High", status: "Resolved", date: "2026-09-14", citizen: "Mohit Rao", sla: "3 days" },
  { id: "CMP-1043", title: "Broken footpath tiles", category: "Road Damage", ward: "Ward 9, Bhopal", dept: "Roads", priority: "Low", status: "Resolved", date: "2026-09-13", citizen: "Kavya Nair", sla: "6 days" },
  { id: "CMP-1042", title: "Overflowing dustbin", category: "Garbage / Sanitation", ward: "Ward 3, Bhopal", dept: "Sanitation", priority: "Medium", status: "In Progress", date: "2026-09-13", citizen: "Arjun Singh", sla: "2 days" },
  { id: "CMP-1041", title: "No water supply since morning", category: "Water Leakage", ward: "Ward 11, Bhopal", dept: "Water Supply", priority: "High", status: "Pending", date: "2026-09-13", citizen: "Neha Gupta", sla: "1 day" },
  { id: "CMP-1040", title: "Street light flickering", category: "Street Light", ward: "Ward 18, Bhopal", dept: "Electrical", priority: "Low", status: "Resolved", date: "2026-09-12", citizen: "Vikram Das", sla: "4 days" },
  { id: "CMP-1039", title: "Manhole cover missing", category: "Drainage", ward: "Ward 14, Bhopal", dept: "Drainage", priority: "High", status: "In Progress", date: "2026-09-12", citizen: "Ritu Malhotra", sla: "2 days" },
  { id: "CMP-1038", title: "Illegal garbage dumping", category: "Garbage / Sanitation", ward: "Ward 20, Bhopal", dept: "Sanitation", priority: "Medium", status: "Pending", date: "2026-09-12", citizen: "Sameer Khan", sla: "3 days" },
  { id: "CMP-1037", title: "Cracked road divider", category: "Road Damage", ward: "Ward 6, Bhopal", dept: "Roads", priority: "Low", status: "Resolved", date: "2026-09-11", citizen: "Pooja Reddy", sla: "5 days" },
]

export const departments = [
  { name: "Electrical Department", head: "Rajesh Kumar", staff: 42, active: 58, resolved: 210, sla: 92, icon: "Lightbulb", color: "var(--color-cat-drain)" },
  { name: "Water Supply", head: "Anita Desai", staff: 38, active: 44, resolved: 178, sla: 86, icon: "Droplets", color: "var(--color-cat-water)" },
  { name: "Roads & Infrastructure", head: "Suresh Menon", staff: 55, active: 61, resolved: 156, sla: 78, icon: "Route", color: "var(--color-cat-street)" },
  { name: "Sanitation", head: "Meena Iyer", staff: 70, active: 72, resolved: 142, sla: 71, icon: "Trash2", color: "var(--color-cat-garbage)" },
  { name: "Drainage", head: "Farhan Ali", staff: 33, active: 39, resolved: 125, sla: 68, icon: "Waves", color: "var(--color-cat-water)" },
  { name: "Parks & Gardens", head: "Lata Joshi", staff: 24, active: 18, resolved: 96, sla: 81, icon: "Trees", color: "var(--color-cat-garbage)" },
]

export const monthlyVolume = [
  { m: "Apr", complaints: 820, resolved: 690 },
  { m: "May", complaints: 910, resolved: 760 },
  { m: "Jun", complaints: 1040, resolved: 880 },
  { m: "Jul", complaints: 1120, resolved: 970 },
  { m: "Aug", complaints: 1180, resolved: 1010 },
  { m: "Sep", complaints: 1248, resolved: 1090 },
]

export const priorityBreakdown = [
  { name: "High", value: 384, color: "var(--color-bad)" },
  { name: "Medium", value: 520, color: "var(--color-warn)" },
  { name: "Low", value: 344, color: "var(--color-good)" },
]

export const wardHotspots = [
  { ward: "Ward 18", count: 96, top: "Street Light" },
  { ward: "Ward 7", count: 88, top: "Garbage" },
  { ward: "Ward 22", count: 81, top: "Road Damage" },
  { ward: "Ward 5", count: 74, top: "Water Leakage" },
  { ward: "Ward 16", count: 69, top: "Drainage" },
]

export const reports = [
  { name: "Monthly Complaint Summary — September", type: "PDF", size: "2.4 MB", date: "2026-09-15", by: "System" },
  { name: "Department SLA Compliance — Q3", type: "XLSX", size: "1.1 MB", date: "2026-09-14", by: "Analytics" },
  { name: "Ward-wise Hotspot Analysis", type: "PDF", size: "3.8 MB", date: "2026-09-12", by: "AI Triage" },
  { name: "Resolution Time Trends", type: "CSV", size: "640 KB", date: "2026-09-10", by: "System" },
  { name: "Citizen Feedback Report", type: "PDF", size: "1.9 MB", date: "2026-09-08", by: "Analytics" },
]

export const navItems = [
  { to: "/", label: "Dashboard", icon: "LayoutDashboard" },
  { to: "/complaints", label: "Complaints", icon: "FileText" },
  { to: "/ai-triage", label: "AI Triage", icon: "Radar" },
  { to: "/departments", label: "Departments", icon: "Building2" },
  { to: "/map", label: "Map View", icon: "MapPin" },
  { to: "/analytics", label: "Analytics", icon: "BarChart3" },
  { to: "/reports", label: "Reports", icon: "ClipboardList" },
  { to: "/settings", label: "Settings", icon: "Settings" },
]
