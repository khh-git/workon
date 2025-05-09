import { Router } from "express";
import {
  createList,
  findListsByUserId,
  deleteListById,
} from "../respositories/List";

const listRouter = Router();

listRouter.get("/:userId/lists", async (req, res, next) => {
  const { userId } = req.params;
  const lists = await findListsByUserId(userId, "_id title cards");

  const populatedLists = await Promise.all(
    lists.map((list) =>
      list.populate({
        path: "cards",
        select: "_id title hasDesc totalComments",
      })
    )
  );

  res.send(populatedLists);
});

listRouter.post("/:userId/lists", async (req, res, next) => {
  const { userId } = req.params;
  const { title } = req.body;

  const newList = await createList(title, userId);

  res.send({ newList, message: "created successfully" });
});

listRouter.delete("/lists/:listId", async (req, res, next) => {
  const { listId } = req.params;

  await deleteListById(listId);

  res.send({ message: "deleted successfully" });
});

export default listRouter;
