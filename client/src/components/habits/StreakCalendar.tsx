interface Props {
  dates: string[]
}

function StreakCalendar({
  dates,
}: Props) {
  const days = Array.from(
    { length: 14 },
    (_, i) => {
      const date = new Date()

      date.setDate(
        date.getDate() -
          (13 - i)
      )

      return date
    }
  )

  const isCompleted = (
    day: Date
  ) => {
    return dates.some((date) => {
      const completed =
        new Date(date)

      return (
        completed.toDateString() ===
        day.toDateString()
      )
    })
  }

  return (
    <div className="flex gap-3 mt-6 flex-wrap">
      {days.map((day) => (
        <div
          key={day.toISOString()}
          className="flex flex-col items-center gap-2"
        >
          <div
            className={`
              w-10
              h-10
              rounded-xl
              ${
                isCompleted(day)
                  ? "bg-lime-400"
                  : "bg-zinc-800"
              }
            `}
          />

          <span className="text-xs text-zinc-500">
            {day
              .toLocaleDateString(
                "en-US",
                {
                  weekday:
                    "short",
                }
              )
              .slice(0, 1)}
          </span>
        </div>
      ))}
    </div>
  )
}

export default StreakCalendar