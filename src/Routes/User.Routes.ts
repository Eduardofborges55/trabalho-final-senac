import { Router } from "express";
import { createUserSchema } from "../schemas/User.Schema";
import { ValidateDataMiddleware } from "../middleware/ValidateData.Middlawere";
import { createUserControlller } from "../controllers/Usuarios.Controller";

export const UserRoutes:Router = Router()

UserRoutes.post("",ValidateDataMiddleware(createUserSchema),createUserControlller)