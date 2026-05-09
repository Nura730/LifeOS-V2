interface Props {
  title: string
  description: string
}

function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-dashed
        border-zinc-800
        bg-zinc-900/40
        p-16
        text-center
      "
    >
      <div className="text-6xl mb-6">
        ⚡
      </div>

      <h2 className="text-3xl font-black text-white">
        {title}
      </h2>

      <p className="text-zinc-400 mt-4 max-w-lg mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default EmptyState