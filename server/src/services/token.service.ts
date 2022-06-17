import { RefreshTokenModel } from '../models/token.model';

async function isTokenExistent(refreshToken: string) {
    return await RefreshTokenModel.exists({ refreshToken });
}

async function removeRefreshToken(refreshToken: string) {
    return await RefreshTokenModel.findOneAndRemove({ refreshToken });
}

async function getRefreshToken(refreshToken: string) {
    return await RefreshTokenModel.findOne({ refreshToken });
}

export {
    removeRefreshToken,
    isTokenExistent,
    getRefreshToken
}