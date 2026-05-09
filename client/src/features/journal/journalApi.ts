import axiosInstance from "../../api/axios"

import type { Journal } from "../../types/journal"

interface JournalResponse {
  success: boolean
  data: Journal[]
}

interface CreateJournalResponse {
  success: boolean
  data: Journal
}

export const getJournals =
  async () => {
    const response =
      await axiosInstance.get<JournalResponse>(
        "/journals"
      )

    return response.data.data
  }

export const createJournal =
  async (
    title: string,
    content: string,
    mood: number
  ) => {
    const response =
      await axiosInstance.post<CreateJournalResponse>(
        "/journals",
        {
          title,
          content,
          mood,
        }
      )

    return response.data.data
  }