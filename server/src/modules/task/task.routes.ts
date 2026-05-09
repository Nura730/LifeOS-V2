import express from "express"

import authMiddleware from "../../middlewares/auth.middleware"

import {
  createTaskController,
  getTasksController,
  completeTaskController,
} from "./task.controller"

const router = express.Router()

router.post(
  "/",
  authMiddleware,
  createTaskController
)

router.get(
  "/",
  authMiddleware,
  getTasksController
)

router.patch(
  "/:id/complete",
  authMiddleware,
  completeTaskController
)

export default router