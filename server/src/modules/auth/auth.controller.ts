import { Request, Response } from "express"
import {registerSchema,loginSchema,} from "./auth.validation"
import {registerUser,loginUser,} from "./auth.service"
import User from "./auth.model"
import { AuthRequest } from "../../middlewares/auth.middleware"



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


export const loginController = async (
  req: Request,
  res: Response
) => {
  try {
    const validatedData = loginSchema.parse(req.body)

    const result = await loginUser(
      validatedData.email,
      validatedData.password
    )

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}


export const getCurrentUserController = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const user = await User.findById(req.user.id).select("-password")

    res.status(200).json({
      success: true,
      data: user,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}