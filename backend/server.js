import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use("/api/food", foodRouter)
app.use("/image", express.static("uploads"))

app.get("/", (req, res) => {
  res.send("API Working")
})

const startServer = async () => {
  await connectDB()
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
  })
}

startServer()