import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    email: String,
    age: Number,
    maxes: JSON,
    role: {
      type: String,
      enum: ["ATHLETE", "COACH"],
      default: "ATHLETE" },
  },
  { collection: "users" });
export default userSchema;

