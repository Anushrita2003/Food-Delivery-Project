import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI

if (!mongoURI) {
  console.error("DB Connection Error: MONGODB_URI is not defined in .env")
  process.exit(1)
}

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 5000 })
    console.log("DB Connected")
  } catch (error) {
    console.error("DB Connection Error:", error.message)
    console.error("Please verify your MongoDB Atlas URI, network access, and DNS settings.")
    process.exit(1)
  }
}