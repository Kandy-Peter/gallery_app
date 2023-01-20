import { Router, Request, Response } from "express";
import { checkJwt } from "../middlewares/jwt/checkjwt";
import auth from "./auth";
import gallery from './gallery'

const routes = Router();

routes.use("/auth",  auth);
routes.use("/gallery", [checkJwt], gallery);

export default routes;
