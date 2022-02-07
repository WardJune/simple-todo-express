import express, { Application, Response, Request } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

//? router
import UserRoutes from "./routers/UserRoutes";
import AuthRoutes from "./routers/AuthRoutes";

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.route();
  }

  //* config
  private config(): void {
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());
  }

  //* route
  protected route(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        success: true,
        successCode: 200,
        responseStatus: "OK",
      });
    });

    this.app.use("/api/v1/users", UserRoutes);
    this.app.use("/api/v1/auth", AuthRoutes);
  }
}

const app = new App().app;

app.listen(8080, () => {
  console.log("server running on port 8080");
});
