export interface Task {
  _id: string
  title: string
  description: string

  priority:
    | "low"
    | "medium"
    | "high"

  completed: boolean

  createdAt: string
  updatedAt: string
}