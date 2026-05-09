import type { TimelineItem } from "../../types/timeline"

interface Props {
  item: TimelineItem
}

function TimelineCard({
  item,
}: Props) {
  const badgeColor =
    item.type === "habit"
      ? "bg-lime-400/10 text-lime-400 border-lime-400/20"
      : item.type === "task"
      ? "bg-blue-400/10 text-blue-400 border-blue-400/20"
      : "bg-purple-400/10 text-purple-400 border-purple-400/20"

  return (
    <div className="relative pl-10">
      {/* Timeline line */}
      <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-zinc-800" />

      {/* Dot */}
      <div className="absolute left-0 top-6 w-6 h-6 rounded-full bg-lime-400 border-4 border-zinc-950" />

      {/* Card */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div>
            <div
              className={`
                inline-flex
                px-3
                py-1
                rounded-full
                border
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                ${badgeColor}
              `}
            >
              {item.type}
            </div>

            <h2 className="text-2xl font-black text-white mt-4">
              {item.title}
            </h2>

            {item.description && (
              <p className="text-zinc-400 mt-3 leading-relaxed">
                {item.description}
              </p>
            )}

            {item.mood && (
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-lime-400/10 border border-lime-400/20">
                <span className="text-lime-400 font-bold">
                  Mood:
                  {" "}
                  {item.mood}/10
                </span>
              </div>
            )}
          </div>

          <div className="text-zinc-500 text-sm whitespace-nowrap">
            {new Date(
              item.createdAt
            ).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineCard