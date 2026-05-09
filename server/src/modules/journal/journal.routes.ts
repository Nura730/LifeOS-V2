import express from "express"

import authMiddleware from "../../middlewares/auth.middleware"

import {
  createJournalController,
  getJournalsController,
} from "./journal.controller"

const router = express.Router()

router.post(
  "/",
  authMiddleware,
  createJournalController
)

router.get(
  "/",
  authMiddleware,
  getJournalsController
)

export default router