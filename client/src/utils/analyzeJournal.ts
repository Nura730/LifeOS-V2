interface AnalysisData {
  mood: number
  content: string
}

export function analyzeJournal({
  mood,
  content,
}: AnalysisData) {
  const text =
    content.toLowerCase()

  // Positive patterns
  if (
    mood >= 8 &&
    (
      text.includes("focus") ||
      text.includes("productive") ||
      text.includes("disciplined")
    )
  ) {
    return "Your reflection suggests strong alignment between focus and emotional stability."
  }

  // Stress patterns
  if (
    mood <= 4 &&
    (
      text.includes("stress") ||
      text.includes("tired") ||
      text.includes("burnout")
    )
  ) {
    return "Your mental recovery systems may be overloaded. Prioritize rest and cognitive recovery."
  }

  // Consistency pattern
  if (
    text.includes("consistent") ||
    text.includes("habit") ||
    text.includes("routine")
  ) {
    return "Your reflections indicate growing behavioral consistency and identity reinforcement."
  }

  // Deep work pattern
  if (
    text.includes("deep work") ||
    text.includes("focus")
  ) {
    return "Deep focus sessions appear to positively influence your execution quality."
  }

  // Motivation pattern
  if (
    text.includes("motivation") ||
    text.includes("discipline")
  ) {
    return "Your mindset is shifting from motivation dependence toward identity-based discipline."
  }

  // Recovery
  if (mood <= 5) {
    return "Your recent reflections suggest mental fatigue. Recovery quality directly impacts execution performance."
  }

  // High performance
  if (mood >= 8) {
    return "Your current behavioral patterns indicate strong execution momentum and emotional stability."
  }

  // Default
  return "Your behavioral reflections are generating deeper self-awareness and execution insight."
}