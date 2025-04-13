import { model } from "mongoose";
import { userSchema } from "../schema/User";

export const userModel = model("User", userSchema);
