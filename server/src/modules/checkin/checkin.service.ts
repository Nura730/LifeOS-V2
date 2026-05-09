import CheckIn from "./checkin.model"

export const createCheckIn =
  async (
    userId: string,
    mood: number,
    energy: number,
    focus: number,
    notes?: string
  ) => {
    return CheckIn.create({
      user: userId,
      mood,
      energy,
      focus,
      notes,
    })
  }

export const getCheckIns =
  async (userId: string) => {
    return CheckIn.find({
      user: userId,
    }).sort({
      createdAt: -1,
    })
  }