import mongoose from "mongoose";
export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error while trying to connect DB", err);
  }
};
