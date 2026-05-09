import Sidebar from "./Sidebar.tsx"

interface Props {
  children: React.ReactNode
}

function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Sidebar />

      <main
        className="
          xl:ml-[280px]
          p-6
          pt-28
          xl:pt-6
        "
      >
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout