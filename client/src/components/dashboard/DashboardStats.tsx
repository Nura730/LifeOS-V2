interface Props {
  title: string
  value: string | number
  subtitle: string
}

function DashboardStats({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        p-6
      "
    >
      <p className="text-zinc-500 uppercase text-sm tracking-[0.2em]">
        {title}
      </p>

      <h2 className="text-5xl font-black text-white mt-4">
        {value}
      </h2>

      <p className="text-zinc-400 mt-3">
        {subtitle}
      </p>
    </div>
  )
}

export default DashboardStats