import { Request } from "express";
import { IUser } from "./user.interface";

export interface IAuthenticatedRequest extends Request {
    user: IUser
}