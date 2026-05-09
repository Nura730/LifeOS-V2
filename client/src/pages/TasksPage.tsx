import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/dashboard/DashboardLayout"

import Card from "../components/ui/Card"

import {
  createTask,
  getTasks,
  completeTask,
} from "../features/task/taskApi"

import type { Task } from "../types/task"

function TasksPage() {
  const [tasks, setTasks] = useState<
    Task[]
  >([])

  const [title, setTitle] = useState("")
  const [description, setDescription] =
    useState("")

  const [priority, setPriority] =
    useState("medium")

  const fetchTasks = async () => {
    try {
      const data = await getTasks()

      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleCreateTask = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    if (!title.trim()) return

    try {
      await createTask(
        title,
        description,
        priority
      )

      setTitle("")
      setDescription("")
      setPriority("medium")

      fetchTasks()
    } catch (error) {
      console.log(error)
    }
  }

  const handleCompleteTask = async (
    taskId: string
  ) => {
    try {
      await completeTask(taskId)

      fetchTasks()
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
            TASK ENGINE
          </p>

          <h1 className="text-5xl font-black text-white mt-3">
            Execution Layer
          </h1>
        </div>

        {/* Create Task */}
        <Card>
          <form
            onSubmit={handleCreateTask}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Task title..."
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
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
                outline-none
              "
            />

            <textarea
              placeholder="Task description..."
              value={description}
              onChange={(e) =>
                setDescription(
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
                outline-none
                min-h-[120px]
              "
            />

            <select
              value={priority}
              onChange={(e) =>
                setPriority(
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
                outline-none
              "
            >
              <option value="low">
                Low Priority
              </option>

              <option value="medium">
                Medium Priority
              </option>

              <option value="high">
                High Priority
              </option>
            </select>

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
              Create Task
            </button>
          </form>
        </Card>

        {/* Task List */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <Card key={task._id}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {task.title}
                  </h2>

                  <p className="text-zinc-400 mt-3">
                    {task.description}
                  </p>
                </div>

                <div
                  className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                    ${
                      task.priority ===
                      "high"
                        ? "bg-red-500/20 text-red-300"
                        : task.priority ===
                          "medium"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-blue-500/20 text-blue-300"
                    }
                  `}
                >
                  {task.priority}
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() =>
                    handleCompleteTask(
                      task._id
                    )
                  }
                  disabled={task.completed}
                  className={`
                    px-5
                    py-3
                    rounded-2xl
                    font-semibold
                    transition-all
                    ${
                      task.completed
                        ? "bg-lime-400 text-black"
                        : "bg-zinc-800 text-white hover:bg-lime-400 hover:text-black"
                    }
                  `}
                >
                  {task.completed
                    ? "Completed"
                    : "Complete Task"}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TasksPage