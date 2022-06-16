import mongoose from 'mongoose';
import { compareSync, hash } from 'bcrypt';
import { Router } from 'express';
import { ITokens } from '../interfaces/tokens.interface';
import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';
import { saveRefreshToken, signTokens } from '../utils/token.utils';
import * as userService from '../services/user.service';
import * as tokensService from '../services/token.service';
import { verifyToken } from '../middlewares/verify-token';
import { IAuthenticatedRequest } from "../interfaces/auth-request.interface";

const authController = Router();

authController.post('/register', async (req, res) => {
    const inputData = req.body as IUser;

    const userExists = await UserModel.exists({ username: inputData.username }) ||
                       await UserModel.exists({ email: inputData.email });

    if (!userExists) {
        const hashedPassword = await hash(inputData.password, 10);
        inputData.password = hashedPassword;

        try {
            const user: IUser = await userService.createUser(inputData);
            
            const tokens: ITokens = signTokens(user);
            await saveRefreshToken(tokens.refreshToken);

            return res.json(tokens);
        } catch (error) {
            let message: string = 'There was an error signing your token.';

            if (error instanceof mongoose.Error.ValidationError) {
                message = error.message;
            }
            
            return res.send({ error: message });
        }
    }

    return res.json({ error: 'User already exists.' });
});

authController.post('/login', async (req, res) => {
    const email: string = req.body.email;
	if (!email || email === '') {
		return res.status(400).json({ error: 'Invalid email address' })
	}

	const userDocument = await userService.getByEmail(email);
	if (!userDocument) {
		return res.status(404).json({ error: 'User does not exist' })
	}

	const user: IUser = userDocument.toJSON() as IUser;
	if (!compareSync(req.body.password, user.password)) {
		return res.status(403).json({ error: 'Invalid credentials' })
	}

	const tokens: ITokens = signTokens(user);

	try {
		await saveRefreshToken(tokens.refreshToken);

		return res.json(tokens);
	} catch (err) {
		return res.json(err);
	};
});

authController.post('/logout', async (req, res) => {
    const refreshToken: string = req.body.token;

	if (!refreshToken || refreshToken === '') {
		return res.status(400).json({ error: 'Invalid parameter - token' })
	}

	const tokenExists = await tokensService.isTokenExistent(refreshToken);
	if (!tokenExists) {
		return res.send({ error: 'Inexistent token.' });
	}	

	const tokenDocument = await tokensService.removeRefreshToken(refreshToken);
	if (!tokenDocument) {
		return res.status(403);
	}

	return res.json({ message: 'You have been logged out.'});
});

authController.get('/user-info', verifyToken, async (req, res) => {
	const user = await userService.getByEmail((req as IAuthenticatedRequest).user.email);
	return res.json(user);
});

export default authController;