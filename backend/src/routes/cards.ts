import { Router } from "express";
import { createCard } from "../respositories/Card";
import { findListById } from "../respositories/List";

const cardRouter = Router();

// cardRouter.get("/cards", async (req, res, next) => {});

cardRouter.post("/:listId/cards", async (req, res, next) => {
  const { listId } = req.params;
  const { title } = req.body;

  const newCard = await createCard(listId, title);
  const list = await findListById(listId);

  list?.cards.push(newCard._id);
  await list?.save();

  res.send({
    newCard: {
      _id: newCard._id,
      title: newCard.title,
      hasDesc: newCard.hasDesc,
      totalComments: newCard.totalComments,
    },
    message: "created successfully",
  });
});

export default cardRouter;
