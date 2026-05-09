export const getIdentityLevel = (
  score: number
) => {
  if (score >= 200)
    return "Legendary"

  if (score >= 101)
    return "Elite"

  if (score >= 51)
    return "Builder"

  if (score >= 21)
    return "Recovering"

  return "Idle"
}