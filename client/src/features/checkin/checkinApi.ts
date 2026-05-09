import axiosInstance from "../../api/axios"

import type { CheckIn } from "../../types/checkin"

interface CheckInResponse {
  success: boolean
  data: CheckIn[]
}

export const getCheckIns =
  async () => {
    const response =
      await axiosInstance.get<CheckInResponse>(
        "/checkins"
      )

    return response.data.data
  }

export const createCheckIn =
  async (
    mood: number,
    energy: number,
    focus: number,
    notes: string
  ) => {
    const response =
      await axiosInstance.post(
        "/checkins",
        {
          mood,
          energy,
          focus,
          notes,
        }
      )

    return response.data
  }