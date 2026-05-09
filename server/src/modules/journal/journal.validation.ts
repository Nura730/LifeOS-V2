import { z } from "zod"

export const createJournalSchema =
  z.object({
    title:
      z.string().min(2),

    content:
      z.string().min(5),

    mood:
      z.number().min(1).max(10),
  })