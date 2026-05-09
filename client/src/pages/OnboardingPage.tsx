import { useState } from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import toast from "react-hot-toast"

function OnboardingPage() {
  const [step, setStep] =
    useState(1)

  const [selectedGoal,
    setSelectedGoal] =
    useState("")

  const goals = [
    "Discipline",
    "Fitness",
    "Learning",
    "Deep Work",
    "Productivity",
  ]

  const handleContinue = () => {
    if (step === 2 &&
      !selectedGoal) {
      toast.error(
        "Select a goal."
      )

      return
    }

    if (step < 3) {
      setStep(step + 1)
    } else {
      toast.success(
        "LifeOS initialized."
      )

      window.location.href =
        "/dashboard"
    }
  }

  return (
    <DashboardLayout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <Card className="max-w-3xl w-full">
          {/* Step Indicator */}
          <div className="flex items-center gap-3 mb-10">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`
                  h-3
                  flex-1
                  rounded-full
                  ${
                    item <= step
                      ? "bg-lime-400"
                      : "bg-zinc-800"
                  }
                `}
              />
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
                WELCOME
              </p>

              <h1 className="text-6xl font-black text-white leading-tight">
                Build your
                behavioral operating
                system.
              </h1>

              <p className="text-zinc-400 text-lg leading-relaxed">
                LifeOS helps you
                track execution,
                focus, habits,
                emotional state,
                and behavioral
                intelligence.
              </p>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
                  IDENTITY SETUP
                </p>

                <h1 className="text-5xl font-black text-white mt-4">
                  What are you optimizing?
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() =>
                      setSelectedGoal(
                        goal
                      )
                    }
                    className={`
                      p-6
                      rounded-3xl
                      border
                      transition-all
                      text-left
                      ${
                        selectedGoal ===
                        goal
                          ? "border-lime-400 bg-lime-400/10"
                          : "border-zinc-800 bg-zinc-900"
                      }
                    `}
                  >
                    <h2 className="text-2xl font-bold text-white">
                      {goal}
                    </h2>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
                SYSTEM READY
              </p>

              <h1 className="text-5xl font-black text-lime-400">
                Initialization Complete
              </h1>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Your behavioral
                operating system is
                now configured for
                long-term execution
                and identity growth.
              </p>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
                <p className="text-zinc-500 uppercase text-sm">
                  PRIMARY GOAL
                </p>

                <h2 className="text-3xl font-black text-white mt-3">
                  {selectedGoal}
                </h2>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex justify-end mt-10">
            <button
              onClick={handleContinue}
              className="
                px-8
                py-4
                rounded-2xl
                bg-lime-400
                text-black
                font-bold
              "
            >
              {step === 3
                ? "Enter LifeOS"
                : "Continue"}
            </button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default OnboardingPage