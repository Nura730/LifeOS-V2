import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

interface Props {
  children: React.ReactNode
}

function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-black flex relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-lime-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />

      <Sidebar />

      <div className="flex-1 flex flex-col relative z-10">
        <Navbar />

        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout