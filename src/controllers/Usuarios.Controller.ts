import { Request, Response } from "express";
import { createUserService } from "../service/createUserService";
import { createUser } from "../schemas/User.Schema";

export const createUserControlller = async(req:Request,res:Response)=>{
    const userData=req.body
    const user:any = await createUserService(userData)
    return res.status(201).json(user)
}