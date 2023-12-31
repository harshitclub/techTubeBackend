import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Database Connected! | DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database Conn Err: ", error);
    process.exit(1);
  }
};

export default connectDB;
