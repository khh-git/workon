import { model } from "mongoose";
import { CardSchema } from "../schema/Card";

export const CardModel = model("Card", CardSchema);
