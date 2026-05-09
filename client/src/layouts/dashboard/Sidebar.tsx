import { Link, useLocation } from "react-router-dom"

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Habits",
    path: "/habits",
  },
  {
    name: "Tasks",
    path: "/tasks",
  },
  {
    name: "Analytics",
    path: "/analytics",
  },
]

function Sidebar() {
  const location = useLocation()

  return (
    <aside className="hidden md:flex flex-col w-72 bg-black/60 backdrop-blur-xl border-r border-zinc-800/80 p-6 relative z-10">
      <div className="mb-12">
        <h1 className="text-4xl font-black tracking-tight text-white">
          Life<span className="text-lime-400">OS</span>
        </h1>

        <p className="text-zinc-500 text-sm mt-2">
          Execute your life intentionally.
        </p>
      </div>

      <nav className="flex flex-col gap-3">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                relative
                px-5
                py-4
                rounded-2xl
                transition-all
                duration-300
                font-medium
                ${
                  isActive
                    ? "bg-lime-400 text-black shadow-[0_0_30px_rgba(163,230,53,0.35)]"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }
              `}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-10">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
          <p className="text-zinc-400 text-sm">
            Current Identity
          </p>

          <h3 className="text-white text-xl font-bold mt-2">
            Recovering
          </h3>

          <p className="text-zinc-500 text-sm mt-2">
            Consistency creates identity.
          </p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar