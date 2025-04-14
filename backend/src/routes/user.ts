import { Router } from "express";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import {
  createUser,
  findByUsername,
  findUserById,
} from "../respositories/User";
import { isLoggedIn, IAuthorizationRequest } from "../middlewares/auth";

const JWT_SECRET = "THISSECRETISNOTSECRETTOME";

const userRouter = Router();

userRouter.post("/join", async (req, res, next) => {
  const { email, username, password } = req.body;

  const user = await findByUsername(username);
  if (user) {
    throw new Error("Username already exists");
  }

  const passwordHash = await hash(password, 12);
  const newUser = await createUser(username, passwordHash, email);

  res.send(newUser);
});

userRouter.post("/getin", async (req, res, next) => {
  const { username, password } = req.body;

  const user = await findByUsername(username);
  if (!user) {
    throw new Error("Invalid username/password");
  }

  const isValidPassword = await compare(password, user.password ?? "");
  if (!isValidPassword) {
    throw new Error("Invalid username/password");
  }

  const jwtToken = sign({ userId: user._id }, JWT_SECRET);

  res.send({ token: jwtToken, message: "login sucessfull" });
});

userRouter.post("/profile", isLoggedIn, async (req, res, next) => {
  const { userId } = req as IAuthorizationRequest;
  const user = await findUserById(userId);
  if (!user) {
    next(new Error("invalid user with token"));
  }

  res.send({ email: user?.email, username: user?.username });
});

export default userRouter;
