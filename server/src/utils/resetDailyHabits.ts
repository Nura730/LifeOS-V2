import Habit from "../modules/habit/habit.model"

export const resetDailyHabits =
  async () => {
    const now = new Date()

    const startOfToday =
      new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      )

    await Habit.updateMany(
      {
        updatedAt: {
          $lt: startOfToday,
        },
      },
      {
        completedToday: false,
      }
    )
  }