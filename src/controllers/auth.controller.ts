import { Request, Response } from "express";
import User from "../model/User";
import Hash from "../utils/Hash";

class AuthController {
  //! login
  login = async (req: Request, res: Response): Promise<Response> => {
    //* check user
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      //* check password
      let compare = await Hash.hashCheck(password, user.password);
      if (!compare) {
        return res.status(401).json({
          message: "password doesnt match our record",
        });
      }

      //* generate token
      const token = Hash.generateToken(user._id, username);
      return res.status(200).json({
        token: token,
      });
    }

    return res.status(404).json({
      message: "user not found",
    });
  };

  //! register
  register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    const hashedPassword: string = await Hash.hash(password);

    try {
      await User.create({ username, password: hashedPassword });
      return res.status(201).json({
        message: "user created",
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  profile = (req: Request, res: Response): Response => {
    return res.status(200).json({
      message: "this is user profile",
      data: req.app.locals.credential,
    });
  };
}

export default new AuthController();
