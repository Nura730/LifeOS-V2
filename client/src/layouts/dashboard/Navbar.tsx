import { useAuthStore } from "../../store/authStore"

function Navbar() {
  const user = useAuthStore(
    (state) => state.user
  )

  return (
    <header className="h-24 border-b border-zinc-800/70 bg-black/40 backdrop-blur-xl px-10 flex items-center justify-between">
      <div>
        <p className="text-zinc-500 text-sm uppercase tracking-[0.3em]">
          LIFE OPERATING SYSTEM
        </p>

        <h2 className="text-3xl font-black text-white mt-2">
          Welcome back, {user?.name}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-lime-400/30 bg-lime-400/10">
          <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />

          <span className="text-lime-300 text-sm font-medium">
            System Active
          </span>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-lime-400 text-black flex items-center justify-center font-black text-lg shadow-[0_0_30px_rgba(163,230,53,0.4)]">
          {user?.name?.charAt(0)}
        </div>
      </div>
    </header>
  )
}

export default Navbar