import { ListModel } from "../models/List";

export const createList = (title: string, userId: string) => {
  return ListModel.create({ title, user_id: userId });
};

export const findListById = (listId: string) => {
  return ListModel.findOne({ _id: listId });
};

export const findListsByUserId = (
  userId: string,
  projection?: object | string | string[]
) => {
  return ListModel.find({ user_id: userId }, projection);
};
