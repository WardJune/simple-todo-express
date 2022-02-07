import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  let status = true;

  if (status) {
    console.log("silakan");
    next();
  }

  return res.send({
    message: "Unauthenticated",
  });
};
