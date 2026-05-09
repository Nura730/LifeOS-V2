interface Props {
  className?: string
}

function Skeleton({
  className = "",
}: Props) {
  return (
    <div
      className={`
        animate-pulse
        rounded-2xl
        bg-zinc-800/70
        ${className}
      `}
    />
  )
}

export default Skeleton