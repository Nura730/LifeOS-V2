import axiosInstance from "../../api/axios"

import type { Task } from "../../types/task"

interface TaskResponse {
  success: boolean
  data: Task[]
}

export const getTasks = async () => {
  const response =
    await axiosInstance.get<TaskResponse>(
      "/tasks"
    )

  return response.data.data
}

export const createTask = async (
  title: string,
  description: string,
  priority: string
) => {
  const response =
    await axiosInstance.post(
      "/tasks",
      {
        title,
        description,
        priority,
      }
    )

  return response.data
}

export const completeTask = async (
  taskId: string
) => {
  const response =
    await axiosInstance.patch(
      `/tasks/${taskId}/complete`
    )

  return response.data
}