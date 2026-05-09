import Habit from "./habit.model"

export const createHabit = async (
  userId: string,
  title: string,
  description?: string
) => {
  const habit = await Habit.create({
    user: userId,
    title,
    description,
  })

  return habit
}

export const getHabits = async (
  userId: string
) => {
  const habits = await Habit.find({
    user: userId,
  }).sort({
    createdAt: -1,
  })

  const today = new Date()

  for (const habit of habits) {
    if (habit.lastCompletedDate) {
      const lastCompleted = new Date(
        habit.lastCompletedDate
      )

      const isSameDay =
        lastCompleted.toDateString() ===
        today.toDateString()

      if (!isSameDay) {
        habit.completedToday = false
        await habit.save()
      }
    }
  }

  return habits
}




export const completeHabitService = async (
  habitId: string,
  userId: string
) => {
  const habit = await Habit.findOne({
    _id: habitId,
    user: userId,
  })

  if (!habit) {
    throw new Error("Habit not found")
  }

  const today = new Date()

  const lastCompleted =
    habit.lastCompletedDate
      ? new Date(habit.lastCompletedDate)
      : null

  const isSameDay =
    lastCompleted &&
    lastCompleted.toDateString() ===
      today.toDateString()

  if (isSameDay) {
    throw new Error(
      "Habit already completed today"
    )
  }

  habit.completedToday = true
  habit.lastCompletedDate = today
  habit.streak += 1

  await habit.save()

  return habit
}