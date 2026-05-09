import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import Skeleton from "../components/ui/Skeleton"

import { getHabits } from "../features/habit/habitApi"
import { getTasks } from "../features/task/taskApi"

import type { Habit } from "../types/habit"
import type { Task } from "../types/task"

import { getIdentityLevel } from "../utils/getIdentityLevel"

import PerformanceChart from "../components/charts/PerformanceChart"
import PageWrapper from "../components/animations/PageWrapper"
import Heatmap from "../components/analytics/Heatmap"

function AnalyticsPage() {
  const [habits, setHabits] = useState<
    Habit[]
  >([])

  const [tasks, setTasks] = useState<
    Task[]
  >([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const habitsData =
          await getHabits()

        const tasksData =
          await getTasks()

        setHabits(habitsData)
        setTasks(tasksData)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
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

  const weeklyPerformance = [
    {
      day: "Mon",
      score: Math.max(
        10,
        lifeScore - 60
      ),
    },
    {
      day: "Tue",
      score: Math.max(
        20,
        lifeScore - 40
      ),
    },
    {
      day: "Wed",
      score: Math.max(
        30,
        lifeScore - 20
      ),
    },
    {
      day: "Thu",
      score: Math.max(
        40,
        lifeScore - 10
      ),
    },
    {
      day: "Fri",
      score: Math.max(
        50,
        lifeScore
      ),
    },
    {
      day: "Sat",
      score: Math.max(
        60,
        lifeScore + 10
      ),
    },
    {
      day: "Sun",
      score: Math.max(
        70,
        lifeScore + 20
      ),
    },
  ]
if (loading) {
  return (
    <DashboardLayout>
      <PageWrapper>
        <div className="space-y-8">
          <Skeleton className="h-[220px] w-full" />

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <Skeleton className="h-[140px]" />
            <Skeleton className="h-[140px]" />
            <Skeleton className="h-[140px]" />
            <Skeleton className="h-[140px]" />
          </div>

          <Skeleton className="h-[400px] w-full" />
        </div>
      </PageWrapper>
    </DashboardLayout>
  )
}

const weeklyHeatmap = [
  completedHabits,
  completedTasks,
  Math.floor(lifeScore / 20),
  completedHabits + 1,
  completedTasks + 2,
  Math.floor(lifeScore / 15),
  Math.floor(lifeScore / 10),
]


  return (
  <DashboardLayout>
    <PageWrapper>
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

        {/* Performance Chart */}
        <Card>
          <div className="mb-8">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
              WEEKLY PERFORMANCE
            </p>

            <h2 className="text-3xl font-black text-white mt-4">
              Execution Trend
            </h2>

            <p className="text-zinc-400 mt-3">
              Behavioral momentum across the week.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-950 p-4 border border-zinc-800">
            <PerformanceChart
              data={weeklyPerformance}
            />
          </div>
        </Card>


        {/*HeatMap*/}
        <Card>
  <div className="mb-8">
    <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
      EXECUTION HEATMAP
    </p>

    <h2 className="text-3xl font-black text-white mt-4">
      Weekly Consistency
    </h2>

    <p className="text-zinc-400 mt-3">
      Your execution intensity across the week.
    </p>
  </div>

  <Heatmap
    data={weeklyHeatmap}
  />
</Card>

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
    </PageWrapper>
  </DashboardLayout>
)
}

export default AnalyticsPage