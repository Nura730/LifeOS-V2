import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import { getHabits } from "../features/habit/habitApi"
import { getTasks } from "../features/task/taskApi"

import type { Habit } from "../types/habit"
import type { Task } from "../types/task"

import { getIdentityLevel } from "../utils/getIdentityLevel"

function AnalyticsPage() {
  const [habits, setHabits] = useState<
    Habit[]
  >([])

  const [tasks, setTasks] = useState<
    Task[]
  >([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const habitsData =
          await getHabits()

        const tasksData =
          await getTasks()

        setHabits(habitsData)
        setTasks(tasksData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const completedHabits =
    habits.filter(
      (habit) =>
        habit.completedToday
    ).length

  const completedTasks =
    tasks.filter(
      (task) => task.completed
    ).length

  const lifeScore =
    habits.reduce(
      (total, habit) =>
        total + habit.streak,
      0
    ) +
    completedTasks * 5

  const identity =
    getIdentityLevel(lifeScore)

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            ANALYTICS ENGINE
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Behavioral Intelligence
          </h1>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <Card>
            <p className="text-zinc-500 text-sm uppercase">
              Life Score
            </p>

            <h2 className="text-5xl font-black text-lime-400 mt-4">
              {lifeScore}
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 text-sm uppercase">
              Identity
            </p>

            <h2 className="text-4xl font-black text-white mt-4">
              {identity}
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 text-sm uppercase">
              Completed Habits
            </p>

            <h2 className="text-5xl font-black text-white mt-4">
              {completedHabits}
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 text-sm uppercase">
              Completed Tasks
            </p>

            <h2 className="text-5xl font-black text-white mt-4">
              {completedTasks}
            </h2>
          </Card>
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Habit Completion Rate
            </p>

            <h2 className="text-6xl font-black text-white mt-6">
              {habits.length === 0
                ? 0
                : Math.round(
                    (completedHabits /
                      habits.length) *
                      100
                  )}
              %
            </h2>

            <p className="text-zinc-400 mt-4">
              Daily consistency score
            </p>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Task Completion Rate
            </p>

            <h2 className="text-6xl font-black text-white mt-6">
              {tasks.length === 0
                ? 0
                : Math.round(
                    (completedTasks /
                      tasks.length) *
                      100
                  )}
              %
            </h2>

            <p className="text-zinc-400 mt-4">
              Execution performance
            </p>
          </Card>
        </div>

        {/* AI Insight */}
        <Card>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            SYSTEM INSIGHT
          </p>

          <h2 className="text-3xl font-black text-white mt-5">
            {lifeScore < 20
              ? "Your system is still unstable."
              : lifeScore < 60
              ? "You are building consistency."
              : lifeScore < 120
              ? "Execution patterns are improving."
              : "You are operating at a high-performance level."}
          </h2>

          <p className="text-zinc-400 mt-5 leading-relaxed">
            LifeOS analyzes your execution
            consistency, task completion,
            behavioral patterns, and habit
            systems to measure your current
            operating state.
          </p>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default AnalyticsPage