import { Schema } from "mongoose";

export const ListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      index: true,
    },
  },
  { timestamps: true, versionKey: false }
);
