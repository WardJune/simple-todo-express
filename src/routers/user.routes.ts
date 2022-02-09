import BaseRouter from "./base.routes";
import UserController from "../controllers/user.controller";
import { auth } from "../middleware/auth.middleware";

class UserRoutes extends BaseRouter {
  public routes(): void {
    this.router.get("/", auth, UserController.index);
    this.router.post("/", UserController.store);
    this.router.get("/:id", UserController.show);
    this.router.patch("/:id", UserController.update);
    this.router.delete("/:id", UserController.delete);
  }
}

export default new UserRoutes().router;
