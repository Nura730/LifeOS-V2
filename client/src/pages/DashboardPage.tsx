import { useNavigate } from "react-router-dom"

import { useAuthStore } from "../store/authStore"

function DashboardPage() {
  const navigate = useNavigate()

  const user = useAuthStore(
    (state) => state.user
  )

  const logout = useAuthStore(
    (state) => state.logout
  )

  const handleLogout = () => {
    logout()

    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Welcome {user?.name}
        </h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-white text-black font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default DashboardPage