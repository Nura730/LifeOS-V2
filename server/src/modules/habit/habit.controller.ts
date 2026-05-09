import { Response } from "express"

import { AuthRequest } from "../../middlewares/auth.middleware"

import {
  createHabit,
  getHabits,
} from "./habit.service"

import { createHabitSchema } from "./habit.validation"
import { completeHabit } from "./habit.service"

export const createHabitController = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const validatedData =
      createHabitSchema.parse(req.body)

    const habit = await createHabit(
      req.user.id,
      validatedData.title,
      validatedData.description
    )

    res.status(201).json({
      success: true,
      data: habit,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export const getHabitsController = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const habits = await getHabits(
      req.user.id
    )

    res.status(200).json({
      success: true,
      data: habits,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const completeHabitController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const habit = await completeHabit(
        req.params.id,
        req.user.id
      )

      res.status(200).json({
        success: true,
        data: habit,
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      })
    }
  }