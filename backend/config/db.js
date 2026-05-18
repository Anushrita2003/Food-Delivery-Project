import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI
  const mongoURINonSrv = process.env.MONGODB_URI_NON_SRV

  if (!mongoURI) {
    console.error("DB Connection Error: MONGODB_URI is not defined in .env")
    process.exit(1)
  }

  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    })
    console.log("DB Connected")
  } catch (error) {
    if (mongoURINonSrv && error?.message?.includes("querySrv")) {
      try {
        await mongoose.connect(mongoURINonSrv, {
          serverSelectionTimeoutMS: 10000,
          connectTimeoutMS: 10000,
        })
        console.log("DB Connected")
        return
      } catch (err2) {
        // fall through to generic error handling
      }
    }
    console.error("DB Connection Error:", error.message || error)
    process.exit(1)
  }
}