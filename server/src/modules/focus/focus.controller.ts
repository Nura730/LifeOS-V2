import { Response } from "express"

import { AuthRequest } from "../../middlewares/auth.middleware"

import {
  createFocusSession,
  getFocusSessions,
} from "./focus.service"

export const createFocusSessionController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { duration } =
        req.body

      const session =
        await createFocusSession(
          req.user.id,
          duration
        )

      res.status(201).json({
        success: true,
        data: session,
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      })
    }
  }

export const getFocusSessionsController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const sessions =
        await getFocusSessions(
          req.user.id
        )

      res.status(200).json({
        success: true,
        data: sessions,
      })
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }