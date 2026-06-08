import express from "express"
import cors from "cors"
import 'dotenv/config'

import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
// middleware
app.use(express.json())
app.use(cors())

// database
connectDB()

// api endpoints
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)

// static folder
app.use("/images", express.static(path.join(__dirname, 'uploads')))
app.use("/api/cart", cartRouter)
app.use("/api/orders", orderRouter)

app.get("/", (req, res) => {
  res.send("API Working")
})

export default app