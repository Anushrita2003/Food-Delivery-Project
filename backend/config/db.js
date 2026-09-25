import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);


import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error("DB Connection Error: MONGODB_URI not found in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });

    console.log("DB Connected:", mongoose.connection.name);
    console.log("Host:", mongoose.connection.host);
  } catch (error) {
    console.error("DB Connection Error:", error.message || error);
    process.exit(1);
  }
};