interface Props {
  data: number[]
}

function Heatmap({
  data,
}: Props) {
  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ]

  const getColor = (
    value: number
  ) => {
    if (value >= 8)
      return "bg-lime-400"

    if (value >= 5)
      return "bg-lime-500/70"

    if (value >= 3)
      return "bg-lime-700/60"

    if (value >= 1)
      return "bg-zinc-600"

    return "bg-zinc-800"
  }

  return (
    <div className="grid grid-cols-7 gap-4">
      {days.map((day, index) => (
        <div
          key={day}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-zinc-500 text-sm">
            {day}
          </span>

          <div
            className={`
              w-14
              h-14
              rounded-2xl
              transition-all
              hover:scale-110
              ${getColor(data[index])}
            `}
          />

          <span className="text-white text-sm font-medium">
            {data[index]}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Heatmap