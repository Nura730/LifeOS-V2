import { useForm } from "react-hook-form"

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

import toast, {
  Toaster,
} from "react-hot-toast"

import {
  useNavigate,
  Link,
} from "react-router-dom"

import { loginUser } from "../features/auth/authApi"

import { useAuthStore } from "../store/authStore"

const loginSchema = z.object({
  email:
    z.string().email(),

  password:
    z.string().min(6),
})

type LoginFormData =
  z.infer<
    typeof loginSchema
  >

function LoginPage() {
  const navigate =
    useNavigate()

  const setAuth =
    useAuthStore(
      (state) =>
        state.setAuth
    )

  const {
    register,
    handleSubmit,

    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<LoginFormData>({
    resolver:
      zodResolver(
        loginSchema
      ),
  })

  const onSubmit =
    async (
      data: LoginFormData
    ) => {
      try {
        const response =
          await loginUser(
            data.email,
            data.password
          )

        setAuth(
          response.data.user,
          response.data.token
        )

        toast.success(
          "Login successful"
        )

        navigate(
          "/dashboard"
        )
      } catch (
        error: any
      ) {
        toast.error(
          error.response?.data
            ?.message ||
            "Invalid credentials"
        )
      }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white px-4">
      <Toaster />

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-zinc-400 mb-6">
          Continue building your
          behavioral operating
          system.
        </p>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-4"
        >
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register(
                "email"
              )}
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.email
                    .message
                }
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register(
                "password"
              )}
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.password
                    .message
                }
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={
              isSubmitting
            }
            className="w-full p-3 rounded-lg bg-lime-400 text-black font-semibold transition hover:scale-[1.01]"
          >
            {isSubmitting
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <p className="text-zinc-400 mt-6 text-sm">
          Don’t have an
          account?{" "}

          <Link
            to="/register"
            className="text-lime-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage