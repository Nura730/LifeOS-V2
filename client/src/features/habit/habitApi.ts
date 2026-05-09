import axiosInstance from "../../api/axios"

import type { Habit } from "../../types/habit"

interface HabitResponse {
  success: boolean
  data: Habit[]
}

export const getHabits = async () => {
  const response =
    await axiosInstance.get<HabitResponse>(
      "/habits"
    )

  return response.data.data
}

export const createHabit = async (
  title: string,
  description: string
) => {
  const response =
    await axiosInstance.post(
      "/habits",
      {
        title,
        description,
      }
    )

  return response.data
}


export const completeHabit = async (
  habitId: string
) => {
  const response =
    await axiosInstance.patch(
      `/habits/${habitId}/complete`
    )

  return response.data
}