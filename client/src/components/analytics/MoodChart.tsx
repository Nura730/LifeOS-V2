import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

interface Props {
  data: {
    date: string
    mood: number
  }[]
}

function MoodChart({
  data,
}: Props) {
  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            stroke="#71717a"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="mood"
            stroke="#a3e635"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MoodChart