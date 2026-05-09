export interface TimelineItem {
  type: "habit" | "task" | "journal"

  title: string

  description?: string

  createdAt: string

  mood?: number
}