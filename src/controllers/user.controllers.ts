import { Request, Response } from "express";

const formLogin = (req: Request, res: Response) => {
  res.render("auth/login", {});
};

const formRegister = (req: Request, res: Response) => {
  res.render("auth/register", {});
};

export { formLogin, formRegister };
