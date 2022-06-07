import { RefreshTokenModel } from '../models/token.model';

async function isTokenExistent(refreshToken: string) {
    return await RefreshTokenModel.exists({ refreshToken });
}

async function removeRefreshToken(refreshToken: string) {
    return await RefreshTokenModel.findOneAndRemove({ refreshToken });
}

export {
    removeRefreshToken,
    isTokenExistent
}