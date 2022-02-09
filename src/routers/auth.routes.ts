import BaseRouter from "./base.routes";
import AuthController from "../controllers/auth.controller";
import { validateLogin, validateRegister } from "../middleware/auth.validator";
import { auth } from "../middleware/auth.middleware";

class AuthRoute extends BaseRouter {
  public routes(): void {
    this.router.post("/login", validateLogin, AuthController.login);
    this.router.post("/register", validateRegister, AuthController.register);
    this.router.get("/profile", auth, AuthController.profile);
  }
}

export default new AuthRoute().router;
