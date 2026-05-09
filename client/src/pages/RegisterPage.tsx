import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate, Link } from "react-router-dom"

import { registerUser } from "../features/auth/authApi"
import { useAuthStore } from "../store/authStore"

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
})

type RegisterFormData = z.infer<typeof registerSchema>

function RegisterPage() {
  const navigate = useNavigate()

  const setAuth = useAuthStore(
    (state) => state.setAuth
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    try {
      const response = await registerUser(
        data.name,
        data.email,
        data.password
      )

      setAuth(
        response.data.user,
        response.data.token
      )

      toast.success("Account created")

      navigate("/dashboard")
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white px-4">
      <Toaster />

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 rounded-lg bg-white text-black font-semibold"
          >
            {isSubmitting
              ? "Creating..."
              : "Create Account"}
          </button>
        </form>

        <p className="text-zinc-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage