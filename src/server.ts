import express, { Application } from "express";
import { userRoutes } from "./routes/user.routes";

class Server {
  private app: Application;
  private port: number;

  constructor(port = 3000) {
    this.app = express();
    this.port = port;

    this.middlewares();
    this.routes();
    this.listen();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.set("view engine", "pug");
    this.app.set("views", __dirname + "/../src/views");
  }

  private routes(): void {
    userRoutes(this.app);
  }

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

new Server(process.env.PORT);
