import { z } from "zod"

export const createHabitSchema = z.object({
  title: z.string().min(2),
  description: z.string().optional(),
})