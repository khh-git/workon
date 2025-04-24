import { Schema } from "mongoose";

export const CommentSchema = new Schema(
  {
    commentBy: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);
