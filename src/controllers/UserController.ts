import { Request, Response } from "express";
import IController from "../interfaces/UserController";

const data: any[] = [
  {
    id: 1,
    name: "benjamin",
  },
  {
    id: 2,
    name: "sanjaya",
  },
  {
    id: 3,
    name: "gwen",
  },
  {
    id: 4,
    name: "stacy",
  },
];

class UserController implements IController {
  //* show all user
  index(req: Request, res: Response): Response {
    console.log("ini adalah index");
    return res.status(200).json({
      message: "get all data uses",
      data: data,
    });
  }

  //* show single user
  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find((item) => item.id == id);

    if (!person) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    return res.status(200).json({
      message: "get user",
      data: person,
    });
  }

  //* store data user
  store(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });

    return res.status(200).json({
      message: "data succesfully stored",
    });
  }

  //* update data user
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((item) => item.id == id);
    if (!person) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    person.name = name;

    return res.status(200).json({
      message: "data succesfully updated",
      data: data,
    });
  }

  //* delete single user
  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find((item) => item.id == id);
    if (!person) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    let filtered = data.filter((item) => item.id != id);

    return res.status(200).json({
      message: "data succesfully deleted",
      data: filtered,
    });
  }
}

export default new UserController();
