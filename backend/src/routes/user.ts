import { Router } from "express";
import { hash } from "bcrypt";
import { createUser, findByUsername } from "../respositories/User";

const userRouter = Router();

userRouter.post("/join", async (req, res, next) => {
  const { email, username, password } = req.body;

  const user = await findByUsername(username);
  if (user) {
    throw new Error("username already exists");
  }

  const passwordHash = await hash(password, 12);

  const newUser = await createUser(username, passwordHash, email);

  res.send(newUser);
});

export default userRouter;
