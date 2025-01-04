import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
export const VerifyJWT = (
  req: any,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: "Access token missing" });
    return;
  }
  try {
    const decoded = jwt.verify(
      token,
      (process.env.JWT_SECRET as string) || "asdfas!@###@"
    );
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};
