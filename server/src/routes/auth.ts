import 'reflect-metadata'
import { Router } from "express";
import { AuthController } from "../controllers/UserController";;
import {container} from 'tsyringe';

const Auth = container.resolve(AuthController);


const router = Router();    
//Login route
router.post("/login", Auth.Login);
router.post("/signup", Auth.Register);

export default router;

 