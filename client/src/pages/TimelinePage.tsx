import {
  useEffect,
  useState,
} from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import TimelineCard from "../components/timeline/TimelineCard"

import { getHabits } from "../features/habit/habitApi"
import { getTasks } from "../features/task/taskApi"
import { getJournals } from "../features/journal/journalApi"

import type { TimelineItem } from "../types/timeline"

function TimelinePage() {
  const [timeline,
    setTimeline] =
    useState<TimelineItem[]>([])

  useEffect(() => {
    const fetchTimeline =
      async () => {
        try {
          const habits =
            await getHabits()

          const tasks =
            await getTasks()

          const journals =
            await getJournals()

          const habitItems =
            habits.map(
              (habit) => ({
                type:
                  "habit" as const,

                title:
                  habit.title,

                description:
                  habit.description,

                createdAt:
                  habit.createdAt,
              })
            )

          const taskItems =
            tasks.map(
              (task) => ({
                type:
                  "task" as const,

                title:
                  task.title,

                description:
                  task.description,

                createdAt:
                  task.createdAt,
              })
            )

          const journalItems =
            journals.map(
              (journal) => ({
                type:
                  "journal" as const,

                title:
                  journal.title,

                description:
                  journal.content,

                mood:
                  journal.mood,

                createdAt:
                  journal.createdAt,
              })
            )

          const merged =
            [
              ...habitItems,
              ...taskItems,
              ...journalItems,
            ].sort(
              (a, b) =>
                new Date(
                  b.createdAt
                ).getTime() -
                new Date(
                  a.createdAt
                ).getTime()
            )

          setTimeline(
            merged
          )
        } catch (error) {
          console.log(error)
        }
      }

    fetchTimeline()
  }, [])

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            LIFE TIMELINE
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Behavioral Replay
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            Your execution history,
            emotional states,
            and behavioral evolution.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {timeline.length === 0 ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-10 text-center">
              <p className="text-zinc-500 text-lg">
                No timeline activity yet.
              </p>
            </div>
          ) : (
            timeline.map(
              (
                item,
                index
              ) => (
                <TimelineCard
                  key={index}
                  item={item}
                />
              )
            )
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TimelinePage