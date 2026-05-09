import express from "express"
import authRoutes from "../modules/auth/auth.routes"
import habitRoutes from "../modules/habit/habit.routes"

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/habits", habitRoutes)

export default router   