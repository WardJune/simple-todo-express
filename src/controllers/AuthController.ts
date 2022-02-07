import { Request, Response } from "express";

class AuthController {
  //* login
  login(req: Request, res: Response): Response {
    return res.status(200).json({
      message: "login method",
    });
  }

  //* register
  register(req: Request, res: Response): Response {
    return res.status(200).json({
      message: "register method",
    });
  }
}

export default new AuthController();
