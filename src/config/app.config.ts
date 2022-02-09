import dotenv from "dotenv";

dotenv.config();
export const config = {
  node: {
    environment: process.env.NODE_ENVIROMENT,
  },
  db: {
    name: process.env.DB_NAME || "app",
    host: process.env.DB_HOSTNAME || "localhost",
    port: process.env.DB_PORT || "27017",
  },

  app: {
    port: process.env.PORT || "8080",
    jwt: process.env.JWT_SECRET_KEY || "secret",
  },
};
