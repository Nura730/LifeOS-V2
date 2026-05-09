import FocusSession from "./focus.model"

export const createFocusSession =
  async (
    userId: string,
    duration: number
  ) => {
    return FocusSession.create({
      user: userId,
      duration,
      completed: true,
    })
  }

export const getFocusSessions =
  async (userId: string) => {
    return FocusSession.find({
      user: userId,
    }).sort({
      createdAt: -1,
    })
  }