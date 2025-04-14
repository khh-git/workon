import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload } from "jsonwebtoken";

const JWT_SECRET = "THISSECRETISNOTSECRETTOME";

export interface IAuthorizationRequest extends Request {
  userId: string;
}

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      throw new Error();
    }

    const { userId } = verify(token ?? "", JWT_SECRET) as JwtPayload;
    (req as IAuthorizationRequest).userId = userId;

    next();
  } catch (err) {
    next(new Error("invalid token"));
  }
};

export { isLoggedIn };
