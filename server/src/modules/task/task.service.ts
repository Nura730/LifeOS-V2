import Task from "./task.model"

export const createTask = async (
  userId: string,
  title: string,
  description: string,
  priority: string
) => {
  return Task.create({
    user: userId,
    title,
    description,
    priority,
  })
}

export const getTasks = async (
  userId: string
) => {
  return Task.find({
    user: userId,
  }).sort({
    createdAt: -1,
  })
}

export const completeTask =
  async (
    taskId: string,
    userId: string
  ) => {
    const task =
      await Task.findOne({
        _id: taskId,
        user: userId,
      })

    if (!task) {
      throw new Error(
        "Task not found"
      )
    }

    task.completed = true

    await task.save()

    return task
  }