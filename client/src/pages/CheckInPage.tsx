import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import {
  createCheckIn,
  getCheckIns,
} from "../features/checkin/checkinApi"

import type { CheckIn } from "../types/checkin"

function CheckInPage() {
  const [checkIns, setCheckIns] =
    useState<CheckIn[]>([])

  const [mood, setMood] = useState(5)
  const [energy, setEnergy] =
    useState(5)

  const [focus, setFocus] =
    useState(5)

  const [notes, setNotes] =
    useState("")

  const fetchCheckIns =
    async () => {
      try {
        const data =
          await getCheckIns()

        setCheckIns(data)
      } catch (error) {
        console.log(error)
      }
    }

  useEffect(() => {
    fetchCheckIns()
  }, [])

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault()

      try {
        await createCheckIn(
          mood,
          energy,
          focus,
          notes
        )

        setMood(5)
        setEnergy(5)
        setFocus(5)
        setNotes("")

        fetchCheckIns()
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            DAILY CHECK-IN
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Mental State
          </h1>
        </div>

        {/* Form */}
        <Card>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Mood */}
            <div>
              <label className="text-white font-semibold">
                Mood: {mood}/10
              </label>

              <input
                type="range"
                min="1"
                max="10"
                value={mood}
                onChange={(e) =>
                  setMood(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full mt-3"
              />
            </div>

            {/* Energy */}
            <div>
              <label className="text-white font-semibold">
                Energy: {energy}/10
              </label>

              <input
                type="range"
                min="1"
                max="10"
                value={energy}
                onChange={(e) =>
                  setEnergy(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full mt-3"
              />
            </div>

            {/* Focus */}
            <div>
              <label className="text-white font-semibold">
                Focus: {focus}/10
              </label>

              <input
                type="range"
                min="1"
                max="10"
                value={focus}
                onChange={(e) =>
                  setFocus(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full mt-3"
              />
            </div>

            {/* Notes */}
            <div>
              <textarea
                placeholder="How was your day?"
                value={notes}
                onChange={(e) =>
                  setNotes(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  px-4
                  py-4
                  text-white
                  min-h-[140px]
                  outline-none
                "
              />
            </div>

            <button
              type="submit"
              className="
                px-6
                py-4
                rounded-2xl
                bg-lime-400
                text-black
                font-bold
              "
            >
              Save Check-In
            </button>
          </form>
        </Card>

        {/* History */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {checkIns.map((checkIn) => (
            <Card key={checkIn._id}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">
                    Daily Reflection
                  </h2>

                  <span className="text-zinc-500 text-sm">
                    {new Date(
                      checkIn.createdAt
                    ).toLocaleDateString()}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-zinc-950 p-4 text-center">
                    <p className="text-zinc-500 text-sm">
                      Mood
                    </p>

                    <h3 className="text-3xl font-black text-lime-400 mt-2">
                      {checkIn.mood}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-zinc-950 p-4 text-center">
                    <p className="text-zinc-500 text-sm">
                      Energy
                    </p>

                    <h3 className="text-3xl font-black text-lime-400 mt-2">
                      {checkIn.energy}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-zinc-950 p-4 text-center">
                    <p className="text-zinc-500 text-sm">
                      Focus
                    </p>

                    <h3 className="text-3xl font-black text-lime-400 mt-2">
                      {checkIn.focus}
                    </h3>
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed">
                  {checkIn.notes}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CheckInPage