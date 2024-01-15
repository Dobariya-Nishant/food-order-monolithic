import { connect } from "mongoose";

async function connectDB() {
  try {
    await connect(process.env.MONGO_URL || "");
    console.log("database Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export { connectDB };
