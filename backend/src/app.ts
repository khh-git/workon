import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { userRouter, listRouter, cardRouter } from "./routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(listRouter);
app.use(cardRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { message = "Internal Error", status = 500 } = err;
  res.status(status).json({ errMsg: message });
});

export default app;
