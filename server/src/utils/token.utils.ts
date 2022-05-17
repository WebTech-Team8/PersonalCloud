import jwt from "jsonwebtoken";
import { ITokens } from "../interfaces/tokens.interface";
import { IUser } from "../interfaces/user.interface";
import { RefreshTokenModel } from "../models/token.model";

export const signTokens = (user: IUser): ITokens => {
    const payload = { id: user.id, username: user.username, email: user.email };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: "1h" });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string);

    return { accessToken, refreshToken };
}

export const saveRefreshToken = (refreshToken: string) => {
    const token = new RefreshTokenModel({ refreshToken });

    return token.save();
}