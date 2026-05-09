interface Props {
  children: React.ReactNode
  className?: string
}

function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/70
        backdrop-blur-xl
        p-6
        shadow-[0_0_40px_rgba(0,0,0,0.4)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      {children}
    </div>
  )
}

export default Card