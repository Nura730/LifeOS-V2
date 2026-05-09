import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

interface Props {
  data: {
    day: string
    score: number
  }[]
}

function PerformanceChart({
  data,
}: Props) {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#27272a"
          />

          <XAxis
            dataKey="day"
            stroke="#71717a"
          />

          <YAxis stroke="#71717a" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#a3e635"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart