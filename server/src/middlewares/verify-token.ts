import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/user.interface";
import { IAuthenticatedRequest } from "../interfaces/auth-request.interface";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ').pop();

    if(!token) {
        return res.status(401).send('Invalid token.');
    }

    try {
        let user = verify(token, process.env.ACCESS_TOKEN_SECRET as string) as IUser;
        (req as IAuthenticatedRequest).user = user;
    } catch (error) {
        res.status(403).json({...(error as Error), message: 'Unable to verify token.'});
    }

    next();
}