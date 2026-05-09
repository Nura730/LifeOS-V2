import { Response } from "express"

import { AuthRequest } from "../../middlewares/auth.middleware"

import {
  createJournal,
  getJournals,
} from "./journal.service"

import {
  createJournalSchema,
} from "./journal.validation"

export const createJournalController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const validatedData =
        createJournalSchema.parse(
          req.body
        )

      const journal =
        await createJournal(
          req.user.id,
          validatedData.title,
          validatedData.content,
          validatedData.mood
        )

      res.status(201).json({
        success: true,
        data: journal,
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      })
    }
  }

export const getJournalsController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const journals =
        await getJournals(
          req.user.id
        )

      res.status(200).json({
        success: true,
        data: journals,
      })
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }