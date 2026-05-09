import express from "express"

import {
  generateAIReflection,
} from "../services/ai.service"

const router =
  express.Router()

router.post(
  "/reflection",
  async (req, res) => {
    try {
      const {
        content,
        mood,
      } = req.body

      const insight =
        await generateAIReflection(
          content,
          mood
        )

      res.json({
        success: true,
        insight,
      })
    } catch (error: any) {

      console.log(
        "AI ERROR:",
        error
      )

      res.status(500).json({
        success: false,

        message:
          error.message,
      })
    }
  }
)

export default router