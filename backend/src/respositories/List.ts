import { ListModel } from "../models/List";

const createList = (title: string, userId: string) => {
  return ListModel.create({ title, user_id: userId });
};

const findListsByUserId = (userId: string) => {
  return ListModel.find({ user_id: userId });
};

export { createList, findListsByUserId };
