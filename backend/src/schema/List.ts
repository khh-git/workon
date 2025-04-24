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
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Card",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);
