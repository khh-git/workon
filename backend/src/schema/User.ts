import { Schema } from "mongoose";

export const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: String,
    email: String,
  },
  { timestamps: true, versionKey: false }
);
