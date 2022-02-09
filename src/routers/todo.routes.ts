import BaseRouter from "./base.routes";
import TodoController from "../controllers/todo.controller";
import { auth, isAllowed } from "../middleware/auth.middleware";
import validate from "../middleware/todo.validator";

class TodoRoute extends BaseRouter {
  public routes(): void {
    this.router.get("/", auth, TodoController.index);
    this.router.get("/:id", auth, TodoController.show);
    this.router.post("/", auth, validate, TodoController.store);
    this.router.patch("/:id", auth, validate, isAllowed, TodoController.update);
    this.router.delete("/:id", auth, isAllowed, TodoController.delete);
  }
}

export default new TodoRoute().router;
