import { RefreshTokenModel } from '../models/token.model';

async function removeRefreshToken(refreshToken: string) {
    return await RefreshTokenModel.findOneAndRemove({ refreshToken });
}

export {
    removeRefreshToken
}