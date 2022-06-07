import { model, Schema } from 'mongoose';
import { IRefreshToken } from '../interfaces/tokens.interface';

const refreshTokenSchema = new Schema<IRefreshToken>({
    refreshToken: Schema.Types.String
});

export const RefreshTokenModel = model<IRefreshToken>('Token', refreshTokenSchema);