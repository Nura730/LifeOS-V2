import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import morgan from "morgan"

import routes from "./routes"

const app = express()

app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use(cookieParser())
app.use(helmet())
app.use(morgan("dev"))

app.get("/", (_, res) => {
  res.send("LifeOS API Running")
})

app.use("/api", routes)

export default app