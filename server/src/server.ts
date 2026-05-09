import dotenv from "dotenv"

dotenv.config()

import app from "./app"

import connectDB from "./database/connectDB"

import { resetDailyHabits } from "./utils/resetDailyHabits"

const PORT =
  process.env.PORT || 5000

const startServer =
  async () => {
    await connectDB()

    await resetDailyHabits()

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      )
    })
  }

startServer()