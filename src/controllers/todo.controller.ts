import { Request, Response } from "express";
import IController from "../interfaces/ControllerInterface";
import TodoService from "../services/todo.service";

class TodoController implements IController {
  //! index
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todos = await service.getAll();

    return res.status(200).json({
      success: true,
      message: "get all data todos",
      data: todos,
    });
  };

  //! store
  store = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);

    try {
      await service.store();
      return res.status(200).json({
        success: true,
        message: "todo created",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  };

  //! show
  show = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    try {
      const todo = await service.getOne();
      if (todo) {
        return res.status(200).json({
          success: true,
          message: "get todo",
          data: todo,
        });
      }

      return res.status(404).json({
        success: false,
        message: "todo not found",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error,
      });
    }
  };

  //! update
  update = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    try {
      const todo = await service.update();
      if (todo) {
        return res.status(200).json({
          success: true,
          message: "todo updated",
        });
      }

      return res.status(404).json({
        success: false,
        message: "todo not found",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  };

  //! delete
  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    try {
      const todo = await service.delete();
      if (todo) {
        return res.status(200).json({
          success: true,
          message: "todo deleted",
        });
      }

      return res.status(404).json({
        success: false,
        message: "todo not found",
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        error: error,
      });
    }
  };
}

export default new TodoController();
