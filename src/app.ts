import express, { Application } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import { urlencoded, json } from "body-parser";
import { config } from "./config/app.config";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

//? router
import UserRoutes from "./routers/user.routes";
import AuthRoutes from "./routers/auth.routes";
import TodoRoutes from "./routers/todo.routes";

class App {
  public app: Application;
  public mongoUri: string = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
  constructor() {
    this.app = express();
    this.mongoSetup();
    this.config();
    this.route();
  }

  //! config
  private config(): void {
    this.app.use(morgan("dev"));
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());
  }

  //! mongo
  private mongoSetup(): void {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    mongoose
      .connect(this.mongoUri, options as ConnectOptions)
      .then(() => {
        console.log("database connected");
      })
      .catch((error) => {
        console.log("database connection failed");
      });
  }

  //! route
  protected route(): void {
    this.app.use("/api/v1/users", UserRoutes);
    this.app.use("/api/v1/auth", AuthRoutes);
    this.app.use("/api/v1/todo", TodoRoutes);
  }
}

const app = new App().app;

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${config.db.host}:${config.app.port}`);
});
