import mongoose from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';

async function createUser(userData: IUser) {
    const user = new UserModel({
        id: new mongoose.Types.ObjectId(),
        username: userData.username,
        password: userData.password,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName
    });

    const validation = user.validateSync();
    if (validation) {
        throw validation;
    }

    await user.save();

    return user;
}

async function getByEmail(email: string) {
    return await UserModel.findOne({ email });
}

export {
    createUser,
    getByEmail
}