import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI

if (!mongoURI) {
  console.error("DB Connection Error: MONGODB_URI not found in .env")
  process.exit(1)
}

async function testConnection() {
  try {
    console.log("Attempting to connect with URI:", mongoURI.slice(0, 50) + "...")
    await mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 5000 })
    console.log("✓ DB Connected Successfully!")
    process.exit(0)
  } catch (error) {
    console.error("✗ DB Connection Failed:", error.message)
    console.error("Check Atlas network access, DNS resolution, and your connection string.")
    process.exit(1)
  }
}

testConnection()
