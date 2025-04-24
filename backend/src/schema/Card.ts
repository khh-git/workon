import { Schema } from "mongoose";

export const CardSchema = new Schema(
  {
    listId: {
      type: Schema.Types.ObjectId,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    hasDesc: Boolean,
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    totalComments: Number,
  },
  { timestamps: true, versionKey: false }
);
