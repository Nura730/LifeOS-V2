import Journal from "./journal.model"

export const createJournal =
  async (
    userId: string,
    title: string,
    content: string,
    mood: number
  ) => {
    const journal =
      await Journal.create({
        user: userId,
        title,
        content,
        mood,
      })

    return journal
  }

export const getJournals =
  async (userId: string) => {
    return Journal.find({
      user: userId,
    }).sort({
      createdAt: -1,
    })
  }