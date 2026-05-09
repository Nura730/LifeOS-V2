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
  return Habit.find({
    user: userId,
  }).sort({
    createdAt: -1,
  })
}

export const completeHabit = async (
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

  if (!habit.completedToday) {
    habit.completedToday = true
    habit.streak += 1

    await habit.save()
  }

  return habit
}