import { NextFunction, Request, Response} from "express";
import { Schema, zodType, zodTypeAny } from "zod";

export const ValidateDataMiddleware =
(Schema:zodTypeAny)=> (req:Request,res:Response, next:NextFunction)=>{
    const ValidateData = Schema.parse(req.body);

    req.body = ValidateData;

    return next()
}