import { useNavigate } from "react-router-dom"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"
import Card from "../components/ui/Card"
import { useAuthStore } from "../store/authStore"

function DashboardPage() {
  const navigate = useNavigate()

  const logout = useAuthStore(
    (state) => state.logout
  )

  const handleLogout = () => {
    logout()

    navigate("/login")
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero */}
        <Card className="min-h-[260px] flex flex-col justify-between">
          <div>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
              DAILY EXECUTION STATUS
            </p>

            <h1 className="text-6xl font-black text-white mt-6">
              0
            </h1>

            <p className="text-zinc-400 text-lg mt-4 max-w-xl">
              Your life score reflects your daily
              execution consistency, focus, habits,
              and discipline.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-lime-400 animate-pulse" />

            <span className="text-lime-300 font-medium">
              System waiting for today's execution
            </span>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card>
            <p className="text-zinc-500 uppercase text-sm tracking-[0.2em]">
              Current Streak
            </p>

            <h2 className="text-5xl font-black text-white mt-6">
              0
            </h2>

            <p className="text-zinc-500 mt-4">
              Days of consistency
            </p>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm tracking-[0.2em]">
              Tasks Completed
            </p>

            <h2 className="text-5xl font-black text-white mt-6">
              0
            </h2>

            <p className="text-zinc-500 mt-4">
              Execution progress
            </p>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm tracking-[0.2em]">
              Habits Tracked
            </p>

            <h2 className="text-5xl font-black text-white mt-6">
              0
            </h2>

            <p className="text-zinc-500 mt-4">
              Active habit systems
            </p>
          </Card>
        </div>

        {/* AI Insight */}
        <Card className="border-lime-400/20">
          <p className="text-zinc-500 uppercase text-sm tracking-[0.2em]">
            AI INSIGHT
          </p>

          <h3 className="text-2xl font-bold text-white mt-4">
            You haven’t started today yet.
          </h3>

          <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
            Your execution data is currently empty.
            The moment you begin tracking habits,
            tasks, focus sessions, and routines,
            LifeOS will start analyzing your
            behavioral patterns and performance.
          </p>
        </Card>

        <button
          onClick={handleLogout}
          className="px-6 py-3 rounded-2xl bg-lime-400 text-black font-bold shadow-[0_0_30px_rgba(163,230,53,0.35)] hover:scale-[1.02] transition-all"
        >
          Logout
        </button>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage