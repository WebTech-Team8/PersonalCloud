import { hash } from "bcrypt";
import { Router } from "express";
import mongoose, { mongo } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

const authController = Router();

authController.post("/register", async (req, res) => {
    const inputData = req.body as IUser;

    const userExists = await UserModel.exists({ username: inputData.username }) ||
                       await UserModel.exists({ email: inputData.email });

    if (!userExists) {
        const hashedPassword = await hash(inputData.password, 10);

        const user = new UserModel({
            id: new mongoose.Types.ObjectId(),
            username: inputData.username,
            password: hashedPassword,
            email: inputData.email,
            firstName: inputData.firstName,
            lastName: inputData.lastName
        });

        const validation = user.validateSync();
        if (validation) {
            return res.status(400).json(validation);
        }

        await user.save();

        return res.json(user);
    }

    return res.json({ error: "User already exists." });
});

authController.post("/login", (req, res) => {

});

authController.post("/logout", (req, res) => {

});

export default authController;