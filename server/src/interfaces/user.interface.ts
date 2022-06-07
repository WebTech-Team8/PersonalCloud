import { Request } from 'express';

export interface IUser {
    id: string;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface IAuthenticatedUserRequest extends Request {
    user: IUser;
}