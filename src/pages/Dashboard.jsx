import StatsRow from "../components/dashboard/StatsRow.jsx"
import CategoryDonut from "../components/dashboard/CategoryDonut.jsx"
import Heatmap from "../components/dashboard/Heatmap.jsx"
import AITriageInAction from "../components/dashboard/AITriageInAction.jsx"
import DepartmentPerformance from "../components/dashboard/DepartmentPerformance.jsx"
import AvgResolution from "../components/dashboard/AvgResolution.jsx"
import RecentComplaints from "../components/dashboard/RecentComplaints.jsx"
import QuickActions from "../components/dashboard/QuickActions.jsx"
import FeedbackCard from "../components/dashboard/FeedbackCard.jsx"

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-ink">
          Good Morning, Vikas <span className="animate-pulse">👋</span>
        </h1>
        <p className="mt-1 text-sm text-ink-soft">
          Here&apos;s what&apos;s happening with your city&apos;s complaints today.
        </p>
      </div>

      <StatsRow />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
        <div className="space-y-5 xl:col-span-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <CategoryDonut />
            </div>
            <div className="lg:col-span-7">
              <Heatmap />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <AITriageInAction />
            </div>
            <div className="space-y-5 lg:col-span-5">
              <DepartmentPerformance />
              <AvgResolution />
            </div>
          </div>
        </div>

        <div className="space-y-5 xl:col-span-4">
          <RecentComplaints />
          <QuickActions />
          <FeedbackCard />
        </div>
      </div>
    </div>
  )
}
