import express from "express"
import {
  registerController,
  loginController,
} from "./auth.controller"
import authMiddleware from "../../middlewares/auth.middleware"
import { getCurrentUserController } from "./auth.controller"

const router = express.Router()

router.post("/register", registerController)
router.post("/login", loginController)
router.get(
  "/me",
  authMiddleware,
  getCurrentUserController
)

export default router