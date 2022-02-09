import { Request, Response, NextFunction } from "express";
import { config } from "../config/app.config";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  //* check auth
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Unauthenticated",
    });
  }

  const secretKey = config.app.jwt;
  const token = req.headers.authorization.split(" ")[1];

  //* check token
  try {
    const credential: string | object = jwt.verify(token, secretKey);

    if (credential) {
      req.app.locals.credential = credential;
      return next();
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unauthenticated",
      error: error,
    });
  }
};
