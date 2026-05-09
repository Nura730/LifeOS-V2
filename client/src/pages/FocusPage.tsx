import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import {
  createFocusSession,
  getFocusSessions,
} from "../features/focus/focusApi"

function FocusPage() {
  const [minutes, setMinutes] =
    useState(25)

  const [seconds, setSeconds] =
    useState(0)

  const [isRunning, setIsRunning] =
    useState(false)

  const [sessionsCompleted,
    setSessionsCompleted] =
    useState(0)

  useEffect(() => {
    fetchSessions()
  }, [])

  const fetchSessions = async () => {
    try {
      const sessions =
        await getFocusSessions()

      setSessionsCompleted(
        sessions.length
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    let interval: any

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else {
          if (minutes === 0) {
            clearInterval(interval)

            setIsRunning(false)

            createFocusSession(25)
              .then(() => {
                setSessionsCompleted(
                  (prev) => prev + 1
                )

                alert(
                  "Focus session completed."
                )
              })
              .catch((error) => {
                console.log(error)
              })

            setMinutes(25)
            setSeconds(0)
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      }, 1000)
    }

    return () =>
      clearInterval(interval)
  }, [isRunning, minutes, seconds])

  const startTimer = () =>
    setIsRunning(true)

  const pauseTimer = () =>
    setIsRunning(false)

  const resetTimer = () => {
    setIsRunning(false)

    setMinutes(25)
    setSeconds(0)
  }

  const formatTime = (
    value: number
  ) =>
    value.toString().padStart(2, "0")

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            FOCUS MODE
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Deep Work Engine
          </h1>
        </div>

        {/* Timer */}
        <Card className="flex flex-col items-center justify-center py-20">
          <div className="text-[120px] font-black text-lime-400 tracking-tight">
            {formatTime(minutes)}:
            {formatTime(seconds)}
          </div>

          <p className="text-zinc-500 text-lg mt-6">
            Eliminate distractions.
            Execute intentionally.
          </p>

          {/* Controls */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={startTimer}
              className="
                px-6
                py-4
                rounded-2xl
                bg-lime-400
                text-black
                font-bold
              "
            >
              Start
            </button>

            <button
              onClick={pauseTimer}
              className="
                px-6
                py-4
                rounded-2xl
                bg-zinc-800
                text-white
                font-bold
              "
            >
              Pause
            </button>

            <button
              onClick={resetTimer}
              className="
                px-6
                py-4
                rounded-2xl
                bg-red-500
                text-white
                font-bold
              "
            >
              Reset
            </button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Sessions Completed
            </p>

            <h2 className="text-5xl font-black text-white mt-5">
              {sessionsCompleted}
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Focus Score
            </p>

            <h2 className="text-5xl font-black text-lime-400 mt-5">
              {sessionsCompleted * 10}
            </h2>
          </Card>

          <Card>
            <p className="text-zinc-500 uppercase text-sm">
              Status
            </p>

            <h2 className="text-3xl font-black text-white mt-5">
              {isRunning
                ? "In Focus"
                : "Idle"}
            </h2>
          </Card>
        </div>

        {/* Insight */}
        <Card>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            SYSTEM INSIGHT
          </p>

          <h2 className="text-3xl font-black text-white mt-5">
            Deep work creates
            exponential results.
          </h2>

          <p className="text-zinc-400 mt-5 leading-relaxed">
            Focus Mode helps you
            eliminate distractions
            and build sustained
            execution intensity.
            Every completed session
            increases your cognitive
            endurance and productivity
            consistency.
          </p>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default FocusPage