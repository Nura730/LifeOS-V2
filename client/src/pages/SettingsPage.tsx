import { useState } from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import toast from "react-hot-toast"

function SettingsPage() {
  const [name, setName] =
    useState("Nura")

  const [focusDuration,
    setFocusDuration] =
    useState(25)

  const [dailyGoal,
    setDailyGoal] =
    useState(5)

  const handleSave = () => {
    localStorage.setItem(
      "lifeos-settings",
      JSON.stringify({
        name,
        focusDuration,
        dailyGoal,
      })
    )

    toast.success(
      "Settings saved."
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            SETTINGS
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Personalization
          </h1>
        </div>

        {/* Profile */}
        <Card>
          <div className="space-y-6">
            <div>
              <label className="text-zinc-400 text-sm">
                Display Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  px-4
                  py-4
                  text-white
                  outline-none
                "
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm">
                Default Focus Duration
              </label>

              <input
                type="number"
                value={focusDuration}
                onChange={(e) =>
                  setFocusDuration(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  px-4
                  py-4
                  text-white
                  outline-none
                "
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm">
                Daily Task Goal
              </label>

              <input
                type="number"
                value={dailyGoal}
                onChange={(e) =>
                  setDailyGoal(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  px-4
                  py-4
                  text-white
                  outline-none
                "
              />
            </div>

            <button
              onClick={handleSave}
              className="
                px-6
                py-4
                rounded-2xl
                bg-lime-400
                text-black
                font-bold
              "
            >
              Save Settings
            </button>
          </div>
        </Card>

        {/* System Info */}
        <Card>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            SYSTEM STATUS
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">
                Version
              </span>

              <span className="text-white font-semibold">
                LifeOS v2
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-400">
                Behavioral Engine
              </span>

              <span className="text-lime-400 font-semibold">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-400">
                AI Insight Engine
              </span>

              <span className="text-lime-400 font-semibold">
                Online
              </span>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default SettingsPage