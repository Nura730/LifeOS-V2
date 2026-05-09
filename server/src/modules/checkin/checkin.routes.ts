import express from "express"

import authMiddleware from "../../middlewares/auth.middleware"

import {
  createCheckInController,
  getCheckInsController,
} from "./checkin.controller"

const router = express.Router()

router.post(
  "/",
  authMiddleware,
  createCheckInController
)

router.get(
  "/",
  authMiddleware,
  getCheckInsController
)

export default router