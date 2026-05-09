import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import { useAuthStore } from "../store/authStore"

function ProfilePage() {
  const { user } =
    useAuthStore()

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            PROFILE
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Personal Identity
          </h1>
        </div>

        {/* Main Profile */}
        <Card>
          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-8">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-3xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
              <span className="text-5xl font-black text-lime-300">
                {user?.name?.charAt(0)}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-4xl font-black text-white">
                {user?.name}
              </h2>

              <p className="text-zinc-400 mt-3">
                {user?.email}
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <p className="text-zinc-500 text-sm">
                    Identity
                  </p>

                  <h3 className="text-white font-bold mt-1">
                    Builder
                  </h3>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <p className="text-zinc-500 text-sm">
                    Focus Rank
                  </p>

                  <h3 className="text-lime-400 font-bold mt-1">
                    Elite
                  </h3>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <p className="text-zinc-500 text-sm">
                    Status
                  </p>

                  <h3 className="text-lime-400 font-bold mt-1">
                    Active
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bio */}
        <Card>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            SYSTEM DESCRIPTION
          </p>

          <h2 className="text-3xl font-black text-white mt-5">
            Building long-term behavioral consistency.
          </h2>

          <p className="text-zinc-400 mt-5 leading-relaxed">
            LifeOS tracks execution,
            focus, emotional state,
            and identity development
            to help optimize real-world
            performance and consistency.
          </p>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Execution Score
            </p>

            <h2 className="text-5xl font-black text-white mt-5">
              82
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Focus Sessions
            </p>

            <h2 className="text-5xl font-black text-white mt-5">
              34
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Active Streak
            </p>

            <h2 className="text-5xl font-black text-lime-400 mt-5">
              16
            </h2>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ProfilePage