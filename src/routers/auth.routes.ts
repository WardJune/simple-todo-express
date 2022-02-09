import BaseRouter from "./base.routes";
import AuthController from "../controllers/auth.controller";
import validate from "../middleware/auth.validator";
import { auth } from "../middleware/auth.middleware";

class AuthRoute extends BaseRouter {
  public routes(): void {
    this.router.post("/login", validate, AuthController.login);
    this.router.post("/register", validate, AuthController.register);
    this.router.get("/profile", auth, AuthController.profile);
  }
}

export default new AuthRoute().router;
