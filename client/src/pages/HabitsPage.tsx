import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import {
  createHabit,
  getHabits,
  completeHabit,
} from "../features/habit/habitApi"

import type { Habit } from "../types/habit"

function HabitsPage() {
  const [habits, setHabits] = useState<
    Habit[]
  >([])

  const [title, setTitle] = useState("")
  const [description, setDescription] =
    useState("")

  const fetchHabits = async () => {
    try {
      const data = await getHabits()

      setHabits(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  const handleCreateHabit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    if (!title.trim()) return

    try {
      await createHabit(
        title,
        description
      )

      setTitle("")
      setDescription("")

      fetchHabits()
    } catch (error) {
      console.log(error)
    }
  }

  const handleCompleteHabit = async (
  habitId: string
) => {
  try {
    await completeHabit(habitId)

    fetchHabits()
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
            HABIT ENGINE
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Daily Systems
          </h1>
        </div>

        {/* Create Habit */}
        <Card>
          <form
            onSubmit={handleCreateHabit}
            className="space-y-5"
          >
            <div>
              <label className="text-sm text-zinc-400">
                Habit Name
              </label>

              <input
                type="text"
                placeholder="Read 10 pages..."
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
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
                  focus:border-lime-400
                "
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">
                Description
              </label>

              <textarea
                placeholder="Why does this matter?"
                value={description}
                onChange={(e) =>
                  setDescription(
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
                  focus:border-lime-400
                  min-h-[120px]
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
                hover:scale-[1.02]
                transition-all
              "
            >
              Create Habit
            </button>
          </form>
        </Card>

        {/* Habit List */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {habits.map((habit) => (
            <Card key={habit._id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {habit.title}
                  </h2>

                  <p className="text-zinc-400 mt-3">
                    {habit.description}
                  </p>
                </div>

                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-lime-400/10 border border-lime-400/20">
                  <span className="text-2xl font-black text-lime-300">
                    {habit.streak}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-zinc-500 text-sm">
                    CURRENT STREAK
                  </p>

                  <p className="text-white font-semibold mt-1">
                    {habit.streak} days
                  </p>
                </div>

                <button
  onClick={() =>
    handleCompleteHabit(habit._id)
  }
  disabled={habit.completedToday}
  className={`
    px-5
    py-3
    rounded-2xl
    transition-all
    font-semibold
    ${
      habit.completedToday
        ? "bg-lime-400 text-black"
        : "bg-zinc-800 text-white hover:bg-lime-400 hover:text-black"
    }
  `}
>
  {habit.completedToday
    ? "Completed"
    : "Complete"}
</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default HabitsPage