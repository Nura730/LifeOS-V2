import { Response } from "express"

import { AuthRequest } from "../../middlewares/auth.middleware"

import {
  createCheckIn,
  getCheckIns,
} from "./checkin.service"

import { createCheckInSchema } from "./checkin.validation"

export const createCheckInController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const validatedData =
        createCheckInSchema.parse(
          req.body
        )

      const checkIn =
        await createCheckIn(
          req.user.id,
          validatedData.mood,
          validatedData.energy,
          validatedData.focus,
          validatedData.notes
        )

      res.status(201).json({
        success: true,
        data: checkIn,
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      })
    }
  }

export const getCheckInsController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const checkIns =
        await getCheckIns(
          req.user.id
        )

      res.status(200).json({
        success: true,
        data: checkIns,
      })
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }