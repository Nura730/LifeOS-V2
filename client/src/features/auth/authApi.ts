import axiosInstance from "../../api/axios"
import type { AuthResponse } from "../../types/auth"

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/register",
    {
      name,
      email,
      password,
    }
  )

  return response.data
}

export const loginUser = async (
  email: string,
  password: string
) => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/login",
    {
      email,
      password,
    }
  )

  return response.data
}