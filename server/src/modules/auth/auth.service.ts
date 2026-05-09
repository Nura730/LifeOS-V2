import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "./auth.model"

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const existingUser = await User.findOne({ email })

  if (existingUser) {
    throw new Error("User already exists")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d",
    }
  )

  return {
    user,
    token,
  }
}