import { Router } from "express";
import { createList, findListsByUserId } from "../respositories/List";

const listRouter = Router();

listRouter.get("/:userId/lists", async (req, res, next) => {
  const { userId } = req.params;
  const lists = await findListsByUserId(userId);

  if (!lists) {
    next(new Error("invalid lists"));
  }

  res.send(lists);
});

listRouter.post("/:userId/lists", async (req, res, next) => {
  const { userId } = req.params;
  const { title } = req.body;

  const newList = await createList(title, userId);

  res.send(newList);
});

export default listRouter;
