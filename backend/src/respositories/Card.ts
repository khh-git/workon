import { CardModel } from "../models/Card";

export const createCard = (listId: string, title: string) => {
  return CardModel.create({
    listId,
    title,
    description: "",
    hasDesc: false,
    totalComments: 0,
  });
};
