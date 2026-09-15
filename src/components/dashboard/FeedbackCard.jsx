import { Card } from "../ui/Primitives.jsx"

export default function FeedbackCard() {
  return (
    <Card className="overflow-hidden p-5">
      <div className="flex items-center gap-4">
        <img
          src="/smart-city.png"
          alt="Smart city illustration"
          className="h-20 w-20 shrink-0 rounded-xl object-cover"
        />
        <div>
          <p className="text-[14px] font-bold leading-tight text-ink">
            Help us build a smarter city
          </p>
          <p className="mt-1 text-[12px] leading-snug text-ink-soft">
            Report issues, keep your city clean and safe.
          </p>
        </div>
      </div>
      <button className="mt-4 w-full rounded-xl bg-ink px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-slate-800">
        Give Feedback
      </button>
    </Card>
  )
}
