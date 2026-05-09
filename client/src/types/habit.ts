export interface Habit {
  _id: string
  title: string
  description: string
  streak: number
  completedToday: boolean
  createdAt: string
}