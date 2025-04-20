import { Router } from "express";
import { createList, findListsByUserId } from "../respositories/List";

const listRouter = Router();

listRouter.get("/:userId/lists", async (req, res, next) => {
  const { userId } = req.params;
  const lists = await findListsByUserId(userId, "_id, title");

  res.send(lists);
});

listRouter.post("/:userId/lists", async (req, res, next) => {
  const { userId } = req.params;
  const { title } = req.body;

  const newList = await createList(title, userId);

  res.send({ message: "created successfully" });
});

export default listRouter;
