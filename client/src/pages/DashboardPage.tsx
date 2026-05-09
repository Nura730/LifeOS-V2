import {
  useEffect,
  useState,
} from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import DashboardStats from "../components/dashboard/DashboardStats"

import { useAuthStore } from "../store/authStore"

import { getHabits } from "../features/habit/habitApi"
import { getTasks } from "../features/task/taskApi"
import { getCheckIns } from "../features/checkin/checkinApi"
import { getFocusSessions } from "../features/focus/focusApi"

import type { Habit } from "../types/habit"
import type { Task } from "../types/task"
import type { CheckIn } from "../types/checkin"

import { getIdentityLevel } from "../utils/getIdentityLevel"
import { generateInsight } from "../utils/generateInsight"
import { generateRecommendations } from "../utils/generateRecommendations"

function DashboardPage() {
  const { user } =
    useAuthStore()

  const hour =
    new Date().getHours()

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening"

  const [habits, setHabits] =
    useState<Habit[]>([])

  const [tasks, setTasks] =
    useState<Task[]>([])

  const [checkIns, setCheckIns] =
    useState<CheckIn[]>([])

  const [focusSessions,
    setFocusSessions] =
    useState<any[]>([])

  useEffect(() => {
    const fetchData =
      async () => {
        try {
          const habitsData =
            await getHabits()

          const tasksData =
            await getTasks()

          const checkInsData =
            await getCheckIns()

          const focusData =
            await getFocusSessions()

          setHabits(habitsData)
          setTasks(tasksData)
          setCheckIns(checkInsData)
          setFocusSessions(
            focusData
          )
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
      (task) =>
        task.completed
    ).length

  const latestCheckIn =
    checkIns[0]

  const moodAverage =
    latestCheckIn
      ? Math.round(
          (latestCheckIn.mood +
            latestCheckIn.energy +
            latestCheckIn.focus) /
            3
        )
      : 0

  const lifeScore =
    habits.reduce(
      (total, habit) =>
        total + habit.streak,
      0
    ) +
    completedTasks * 5 +
    focusSessions.length * 10

  const identity =
    getIdentityLevel(lifeScore)

  const completionRate =
    tasks.length > 0
      ? Math.round(
          (completedTasks /
            tasks.length) *
            100
        )
      : 0

  const topHabit =
    [...habits].sort(
      (a, b) =>
        b.streak - a.streak
    )[0]

  const aiInsight =
    generateInsight({
      lifeScore,

      completedHabits,
      totalHabits:
        habits.length,

      completedTasks,
      totalTasks:
        tasks.length,

      focusSessions:
        focusSessions.length,

      moodAverage,
    })

  const recommendations =
    generateRecommendations({
      incompleteTasks:
        tasks.filter(
          (task) =>
            !task.completed
        ).length,

      completedHabits,

      totalHabits:
        habits.length,

      focusSessions:
        focusSessions.length,

      moodAverage,

      lifeScore,

      hasCheckIn:
        checkIns.length > 0,
    })

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
          <div>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
              LIFE OPERATING SYSTEM
            </p>

            <h1 className="text-5xl font-black text-white mt-3">
              {greeting},{" "}
              {user?.name}
            </h1>

            <p className="text-zinc-400 mt-4 text-lg">
              Your behavioral systems
              are online.
            </p>
          </div>

          <div className="px-6 py-4 rounded-2xl bg-lime-400/10 border border-lime-400/20">
            <p className="text-lime-400 font-semibold">
              System Active
            </p>
          </div>
        </div>

        {/* Hero */}
        <Card className="min-h-[260px] flex flex-col justify-between">
          <div>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
              LIFE SCORE
            </p>

            <h1 className="text-6xl font-black text-lime-400 mt-6">
              {lifeScore}
            </h1>

            <p className="text-zinc-400 text-lg mt-4 max-w-xl">
              Your behavioral operating
              score based on execution,
              focus, habits, and mental
              consistency.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-lime-400 animate-pulse" />

            <span className="text-lime-300 font-medium">
              Identity: {identity}
            </span>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <DashboardStats
            title="Completed Habits"
            value={completedHabits}
            subtitle="Systems executed today"
          />

          <DashboardStats
            title="Completed Tasks"
            value={completedTasks}
            subtitle="Mission progress"
          />

          <DashboardStats
            title="Focus Sessions"
            value={
              focusSessions.length
            }
            subtitle="Deep work blocks"
          />

          <DashboardStats
            title="Mental State"
            value={`${moodAverage}/10`}
            subtitle="Current cognitive state"
          />
        </div>

        {/* Daily Status */}
        <Card>
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
            <div>
              <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
                DAILY STATUS
              </p>

              <h2 className="text-4xl font-black text-white mt-4">
                {completionRate >= 80
                  ? "Locked In"
                  : completionRate >= 50
                  ? "Building Momentum"
                  : "Needs Recovery"}
              </h2>

              <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">
                Your behavioral systems
                are actively shaping
                your future identity.
                Consistency compounds
                faster than intensity.
              </p>
            </div>

            <div className="w-28 h-28 rounded-3xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
              <span className="text-4xl font-black text-lime-400">
                {completionRate}%
              </span>
            </div>
          </div>
        </Card>

        {/* Top Habit */}
        <Card>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            TOP SYSTEM
          </p>

          {topHabit ? (
            <div className="mt-5">
              <h2 className="text-4xl font-black text-white">
                {topHabit.title}
              </h2>

              <p className="text-zinc-400 mt-4">
                {topHabit.description}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="px-5 py-3 rounded-2xl bg-lime-400/10 border border-lime-400/20">
                  <span className="text-lime-400 font-bold">
                    {topHabit.streak}
                    {" "}Day Streak
                  </span>
                </div>

                {topHabit.completedToday && (
                  <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <span className="text-white font-semibold">
                      Completed Today
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p className="text-zinc-500 mt-5">
              No habits created yet.
            </p>
          )}
        </Card>

        {/* Insight */}
        <Card>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            SYSTEM INSIGHT
          </p>

          <h2 className="text-3xl font-black text-white mt-5">
            {aiInsight}
          </h2>

          <p className="text-zinc-400 mt-5 leading-relaxed">
            LifeOS continuously
            analyzes your behavior,
            execution quality,
            focus intensity,
            emotional consistency,
            and productivity systems.
          </p>
        </Card>

        {/* Recommendations */}
        <Card>
          <div className="mb-8">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
              SYSTEM RECOMMENDATIONS
            </p>

            <h2 className="text-3xl font-black text-white mt-4">
              Suggested Actions
            </h2>
          </div>

          <div className="space-y-4">
            {recommendations.map(
              (
                recommendation,
                index
              ) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-950
                    p-5
                    flex
                    items-start
                    gap-4
                  "
                >
                  <div className="text-2xl">
                    ⚡
                  </div>

                  <p className="text-zinc-300 leading-relaxed">
                    {recommendation}
                  </p>
                </div>
              )
            )}
          </div>
        </Card>

        {/* Active Systems */}
        <Card>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            ACTIVE SYSTEMS
          </p>

          <div className="mt-5 space-y-4">
            {habits.length === 0 ? (
              <p className="text-zinc-500">
                No active systems yet.
              </p>
            ) : (
              habits
                .slice(0, 4)
                .map((habit) => (
                  <div
                    key={habit._id}
                    className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 px-5 py-4"
                  >
                    <div>
                      <h3 className="text-white font-semibold">
                        {habit.title}
                      </h3>

                      <p className="text-zinc-500 text-sm mt-1">
                        {habit.streak}
                        {" "}day streak
                      </p>
                    </div>

                    <div
                      className={`
                        w-4
                        h-4
                        rounded-full
                        ${
                          habit.completedToday
                            ? "bg-lime-400"
                            : "bg-zinc-700"
                        }
                      `}
                    />
                  </div>
                ))
            )}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage