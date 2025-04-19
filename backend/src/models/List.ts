import { model } from "mongoose";
import { ListSchema } from "../schema/List";

export const ListModel = model("List", ListSchema);
