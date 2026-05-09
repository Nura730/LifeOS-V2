import { useState } from "react"

import {
  Link,
  useLocation,
} from "react-router-dom"

import {
  Menu,
  X,
} from "lucide-react"

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
    name: "Focus",
    path: "/focus",
  },
  {
    name: "Analytics",
    path: "/analytics",
  },
  {
    name: "Timeline",
    path: "/timeline",
  },
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Settings",
    path: "/settings",
  },
  {
  name: "Journal",
  path: "/journal",
},
  
]

function Sidebar() {
  const location =
    useLocation()

  const [isOpen, setIsOpen] =
    useState(false)

  return (
    <>
      {/* Mobile Topbar */}
      <div className="xl:hidden fixed top-0 left-0 right-0 h-20 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-6 z-50">
        <h1 className="text-2xl font-black text-lime-400">
          LifeOS
        </h1>

        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="text-white"
        >
          {isOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() =>
            setIsOpen(false)
          }
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[280px]
          bg-zinc-950
          border-r
          border-zinc-800
          p-6
          z-50
          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          xl:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="mb-12 mt-20 xl:mt-0">
          <h1 className="text-4xl font-black text-lime-400">
            LifeOS
          </h1>

          <p className="text-zinc-500 mt-3">
            Behavioral Operating System
          </p>
        </div>

        {/* Nav */}
        <nav className="space-y-3">
          {navItems.map((item) => {
            const active =
              location.pathname ===
              item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() =>
                  setIsOpen(false)
                }
                className={`
                  block
                  px-5
                  py-4
                  rounded-2xl
                  transition-all
                  font-semibold

                  ${
                    active
                      ? "bg-lime-400 text-black"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }
                `}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar