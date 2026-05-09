import {
  useEffect,
  useState,
} from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import { getHabits } from "../features/habit/habitApi"
import { getTasks } from "../features/task/taskApi"
import { getCheckIns } from "../features/checkin/checkinApi"
import { getFocusSessions } from "../features/focus/focusApi"

import type { Habit } from "../types/habit"
import type { Task } from "../types/task"
import type { CheckIn } from "../types/checkin"

import { getIdentityLevel } from "../utils/getIdentityLevel"

function DashboardPage() {
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

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero */}
        <Card className="min-h-[260px] flex flex-col justify-between">
          <div>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
              LIFE OPERATING SYSTEM
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

        {/* Main Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Completed Habits
            </p>

            <h2 className="text-5xl font-black text-white mt-5">
              {completedHabits}
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Completed Tasks
            </p>

            <h2 className="text-5xl font-black text-white mt-5">
              {completedTasks}
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Focus Sessions
            </p>

            <h2 className="text-5xl font-black text-white mt-5">
              {
                focusSessions.length
              }
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Mental State
            </p>

            <h2 className="text-5xl font-black text-lime-400 mt-5">
              {moodAverage}/10
            </h2>
          </Card>
        </div>

        {/* Insight */}
        <Card>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            SYSTEM INSIGHT
          </p>

          <h2 className="text-3xl font-black text-white mt-5">
            {lifeScore < 20
              ? "Your operating system is unstable."
              : lifeScore < 60
              ? "Execution consistency is forming."
              : lifeScore < 120
              ? "You are entering high-performance patterns."
              : "You are operating at an elite execution level."}
          </h2>

          <p className="text-zinc-400 mt-5 leading-relaxed">
            LifeOS continuously analyzes
            your behavior, execution
            quality, focus intensity,
            emotional consistency, and
            productivity systems to
            measure your real operating
            state.
          </p>
        </Card>

        {/* Quick Analytics */}
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
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage