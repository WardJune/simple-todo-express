import { Request, Response } from "express";
// import IController from "../interfaces/UserController";
import User from "../model/User";

class UserController {
  //* show all user
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await User.find();
      return res.status(200).json({
        message: "get all data uses",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  };

  //* show single user
  show = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
      const person = await User.findById(id);
      return res.status(200).json({
        message: "get user",
        data: person,
      });
    } catch (error) {
      return res.status(404).json({
        message: "user not found",
        error: error,
      });
    }
  };

  //* store data user
  store = async (req: Request, res: Response): Promise<Response> => {
    const { id, name } = req.body;
    try {
      await User.create({ id, name });
      return res.status(200).json({
        message: "data succesfully stored",
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };

  //* update data user
  update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { name } = req.body;

    // await User.updateOne({ _id: id }, {$set: {name}});
    // if (!person) {
    //   return res.status(404).json({
    //     message: "user not found",
    //   });
    // }

    // person.name = name;

    return res.status(200).json({
      message: "data succesfully updated",
      data: "data",
    });
  };

  //* delete single user
  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    // let person = data.find((item) => item.id == id);
    // if (!person) {
    //   return res.status(404).json({
    //     message: "user not found",
    //   });
    // }

    // let filtered = data.filter((item) => item.id != id);

    return res.status(200).json({
      message: "data succesfully deleted",
      // data: filtered,
    });
  };
}

export default new UserController();
