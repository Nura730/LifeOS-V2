import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import { getHabits } from "../features/habit/habitApi"
import { getTasks } from "../features/task/taskApi"
import { getCheckIns } from "../features/checkin/checkinApi"

function TimelinePage() {
  const [activities, setActivities] =
    useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const habits =
          await getHabits()

        const tasks =
          await getTasks()

        const checkIns =
          await getCheckIns()

        const mappedHabits =
          habits.map((habit) => ({
            type: "habit",
            title: `Completed habit "${habit.title}"`,
            date:
              habit.updatedAt ||
              habit.createdAt,
          }))

        const mappedTasks =
          tasks.map((task) => ({
            type: "task",
            title: `Task "${task.title}" ${
              task.completed
                ? "completed"
                : "created"
            }`,
            date:
              task.updatedAt ||
              task.createdAt,
          }))

        const mappedCheckIns =
          checkIns.map((checkIn) => ({
            type: "checkin",
            title:
              "Daily check-in submitted",
            date:
              checkIn.createdAt,
          }))

        const merged = [
          ...mappedHabits,
          ...mappedTasks,
          ...mappedCheckIns,
        ]

        merged.sort(
          (a, b) =>
            new Date(
              b.date
            ).getTime() -
            new Date(
              a.date
            ).getTime()
        )

        setActivities(merged)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            ACTIVITY TIMELINE
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Behavioral History
          </h1>
        </div>

        {/* Timeline */}
        <div className="space-y-5">
          {activities.map(
            (activity, index) => (
              <Card key={index}>
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-2xl
                    ${
                      activity.type ===
                      "habit"
                        ? "bg-lime-400/10"
                        : activity.type ===
                          "task"
                        ? "bg-blue-500/10"
                        : "bg-purple-500/10"
                    }
                  `}
                  >
                    {activity.type ===
                    "habit"
                      ? "🔥"
                      : activity.type ===
                        "task"
                      ? "✔"
                      : "🧠"}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white">
                      {activity.title}
                    </h2>

                    <p className="text-zinc-500 mt-2">
                      {new Date(
                        activity.date
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </Card>
            )
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TimelinePage