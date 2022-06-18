import { Application, Router } from "express";
import { formLogin, formRegister } from "../controllers/user.controllers";

const router: Router = Router();

const userRoutes = (app: Application): Router => {
  app.use("/api/auth", router);

  router.get("/login", formLogin);
  router.get("/register", formRegister);

  return router;
};

export { userRoutes };
