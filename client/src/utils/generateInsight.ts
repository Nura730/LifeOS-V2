interface InsightData {
  lifeScore: number

  completedHabits: number
  totalHabits: number

  completedTasks: number
  totalTasks: number

  focusSessions: number

  moodAverage: number
}

export function generateInsight({
  lifeScore,
  completedHabits,
  totalHabits,
  completedTasks,
  totalTasks,
  focusSessions,
  moodAverage,
}: InsightData) {
  const habitRate =
    totalHabits === 0
      ? 0
      : Math.round(
          (completedHabits /
            totalHabits) *
            100
        )

  const taskRate =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks /
            totalTasks) *
            100
        )

  // Elite state
  if (
    lifeScore > 120 &&
    focusSessions > 5 &&
    moodAverage >= 7
  ) {
    return "You are operating at an elite execution level with strong mental consistency."
  }

  // Strong focus
  if (
    focusSessions >= 3 &&
    taskRate >= 60
  ) {
    return "Focus sessions are significantly improving your execution consistency."
  }

  // Good momentum
  if (
    habitRate >= 70 &&
    taskRate >= 60
  ) {
    return "Your systems are becoming more disciplined and consistent."
  }

  // Mood warning
  if (moodAverage <= 4) {
    return "Your mental state appears unstable. Recovery and energy management should become priorities."
  }

  // Low execution
  if (taskRate < 30) {
    return "Your execution rate is currently low. Reduce task overload and focus on smaller wins."
  }

  // Habit weakness
  if (habitRate < 40) {
    return "Your identity systems are inconsistent. Daily repetition is critical right now."
  }

  // Default
  return "Your behavioral patterns are evolving. Continue building consistency across execution and focus."
}