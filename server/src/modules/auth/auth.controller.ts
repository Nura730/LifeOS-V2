import { Request, Response } from "express"
import { registerSchema } from "./auth.validation"
import { registerUser } from "./auth.service"

export const registerController = async (
  req: Request,
  res: Response
) => {
  try {
    const validatedData = registerSchema.parse(req.body)

    const result = await registerUser(
      validatedData.name,
      validatedData.email,
      validatedData.password
    )

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}