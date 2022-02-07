import BaseRouter from "./BaseRoutes";
import AuthController from "../controllers/AuthController";

class AuthRoute extends BaseRouter {
  public routes(): void {
    this.router.post("/login", AuthController.login);
    this.router.post("/register", AuthController.register);
  }
}

export default new AuthRoute().router;
