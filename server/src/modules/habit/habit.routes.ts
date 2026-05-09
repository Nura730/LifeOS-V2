import express from "express"

import authMiddleware from "../../middlewares/auth.middleware"

import {
  createHabitController,
  getHabitsController,
} from "./habit.controller"
import { completeHabitController } from "./habit.controller"    

const router = express.Router()

router.post(
  "/",
  authMiddleware,
  createHabitController
)

router.get(
  "/",
  authMiddleware,
  getHabitsController
)

router.patch(
  "/:id/complete",
  authMiddleware,
  completeHabitController
)

export default router