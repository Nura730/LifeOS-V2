interface RecommendationData {
  incompleteTasks: number
  completedHabits: number
  totalHabits: number
  focusSessions: number
  moodAverage: number
  lifeScore: number
  hasCheckIn: boolean
}

export function generateRecommendations({
  incompleteTasks,
  completedHabits,
  totalHabits,
  focusSessions,
  moodAverage,
  lifeScore,
  hasCheckIn,
}: RecommendationData) {
  const recommendations: string[] =
    []

  if (incompleteTasks >= 3) {
    recommendations.push(
      "You have multiple unfinished tasks. Prioritize execution before adding new work."
    )
  }

  if (
    totalHabits > 0 &&
    completedHabits <
      totalHabits
  ) {
    recommendations.push(
      "Several habits remain incomplete today. Protect your consistency streak."
    )
  }

  if (focusSessions === 0) {
    recommendations.push(
      "No focus sessions detected today. Deep work increases execution quality."
    )
  }

  if (moodAverage <= 4) {
    recommendations.push(
      "Your mental state appears low. Prioritize recovery and energy management."
    )
  }

  if (!hasCheckIn) {
    recommendations.push(
      "You haven't completed today's mental check-in."
    )
  }

  if (lifeScore >= 100) {
    recommendations.push(
      "Your execution systems are improving rapidly. Maintain momentum."
    )
  }

  if (
    recommendations.length === 0
  ) {
    recommendations.push(
      "Your systems are balanced today. Continue executing consistently."
    )
  }

  return recommendations
}