import express from "express"
import cors from "cors"
import 'dotenv/config'

import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isMainModule = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url

const app = express()
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())

const startServer = async () => {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

if (process.env.NODE_ENV !== 'test' && isMainModule) {
  startServer().catch((error) => {
    console.error('Failed to start server:', error)
    process.exit(1)
  })
}

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