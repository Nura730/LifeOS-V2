import axiosInstance from "../../api/axios"

export const createFocusSession =
  async (
    duration: number
  ) => {
    const response =
      await axiosInstance.post(
        "/focus",
        {
          duration,
        }
      )

    return response.data
  }

export const getFocusSessions =
  async () => {
    const response =
      await axiosInstance.get(
        "/focus"
      )

    return response.data.data
  }