import { z } from "zod"

export const createCheckInSchema =
  z.object({
    mood: z.number().min(1).max(10),

    energy: z.number().min(1).max(10),

    focus: z.number().min(1).max(10),

    notes: z.string().optional(),
  })