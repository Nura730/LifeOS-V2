import express from "express"
import authRoutes from "../modules/auth/auth.routes"
import habitRoutes from "../modules/habit/habit.routes"
import taskRoutes from "../modules/task/task.routes"
import checkInRoutes from "../modules/checkin/checkin.routes"
import focusRoutes from "../modules/focus/focus.routes"

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/habits", habitRoutes)
router.use("/tasks", taskRoutes)
router.use("/checkins", checkInRoutes)
router.use("/focus", focusRoutes)

export default router   