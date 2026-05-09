import express from "express"

import authMiddleware from "../../middlewares/auth.middleware"

import {
  createFocusSessionController,
  getFocusSessionsController,
} from "./focus.controller"

const router = express.Router()

router.post(
  "/",
  authMiddleware,
  createFocusSessionController
)

router.get(
  "/",
  authMiddleware,
  getFocusSessionsController
)

export default router