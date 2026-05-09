import {
  useEffect,
  useState,
} from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import {
  createJournal,
  getJournals,
} from "../features/journal/journalApi"

import type { Journal } from "../types/journal"

import { analyzeJournal } from "../utils/analyzeJournal"

function JournalPage() {
  const [journals,
    setJournals] =
    useState<Journal[]>([])

  const [title, setTitle] =
    useState("")

  const [content,
    setContent] =
    useState("")

  const [mood, setMood] =
    useState(5)

  useEffect(() => {
    fetchJournals()
  }, [])

  const fetchJournals =
    async () => {
      try {
        const data =
          await getJournals()

        setJournals(data)
      } catch (error) {
        console.log(error)
      }
    }

  const handleCreateJournal =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault()

      try {
        const journal =
          await createJournal(
            title,
            content,
            mood
          )

        setJournals([
          journal,
          ...journals,
        ])

        setTitle("")
        setContent("")
        setMood(5)
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
            REFLECTION SYSTEM
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Journal
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            Capture thoughts,
            lessons,
            emotions,
            and behavioral patterns.
          </p>
        </div>

        {/* Create */}
        <Card>
          <form
            onSubmit={
              handleCreateJournal
            }
            className="space-y-6"
          >
            <div>
              <label className="text-zinc-400 text-sm">
                Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                placeholder="Reflection title..."
                className="
                  w-full
                  mt-2
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  px-5
                  py-4
                  text-white
                  outline-none
                "
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm">
                Reflection
              </label>

              <textarea
                rows={6}
                value={content}
                onChange={(e) =>
                  setContent(
                    e.target.value
                  )
                }
                placeholder="What happened today?"
                className="
                  w-full
                  mt-2
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  px-5
                  py-4
                  text-white
                  outline-none
                  resize-none
                "
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm">
                Mood: {mood}/10
              </label>

              <input
                type="range"
                min={1}
                max={10}
                value={mood}
                onChange={(e) =>
                  setMood(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="
                  w-full
                  mt-4
                "
              />
            </div>

            <button
              type="submit"
              className="
                rounded-2xl
                bg-lime-400
                px-8
                py-4
                font-bold
                text-black
                transition
                hover:scale-[1.02]
              "
            >
              Save Reflection
            </button>
          </form>
        </Card>

        {/* Feed */}
        <div className="space-y-6">
          {journals.map(
            (journal) => {
              const analysis =
                analyzeJournal({
                  mood:
                    journal.mood,

                  content:
                    journal.content,
                })

              return (
                <Card
                  key={
                    journal._id
                  }
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h2 className="text-3xl font-black text-white">
                        {
                          journal.title
                        }
                      </h2>

                      <p className="text-zinc-400 mt-5 leading-relaxed whitespace-pre-wrap">
                        {
                          journal.content
                        }
                      </p>

                      {/* AI Analysis */}
                      <div className="mt-6 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">
                        <p className="text-lime-400 uppercase text-xs tracking-[0.3em]">
                          AI ANALYSIS
                        </p>

                        <p className="text-zinc-300 mt-3 leading-relaxed">
                          {
                            analysis
                          }
                        </p>
                      </div>

                      <p className="text-zinc-600 text-sm mt-6">
                        {new Date(
                          journal.createdAt
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="min-w-[80px] h-[80px] rounded-3xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
                      <span className="text-3xl font-black text-lime-400">
                        {
                          journal.mood
                        }
                      </span>
                    </div>
                  </div>
                </Card>
              )
            }
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default JournalPage