import { Router } from "express";
import mongoose from "mongoose";
import { IAuthenticatedRequest } from "../interfaces/auth-request.interface";
import { verifyToken } from "../middlewares/verify-token";
import * as directoryService from "../services/directory.service";

const directoryController = Router();

directoryController.post('/create', verifyToken, async (req, res) => {
    const { dirName, parentId } = req.body;
    const ownerId = (req as IAuthenticatedRequest).user.id;

    if (parentId) {
        const isDirectoryNameUsed = await directoryService.isDirNameUsed(parentId, dirName);
        
        if (isDirectoryNameUsed) {
            return res.json({ error: `Directory ${dirName} already exists.` });
        }
    }

    try {
        const directory = await directoryService.createDir(dirName, ownerId, parentId);
        directoryService.addDirToParentChildren(parentId, directory.id);

        return res.json(directory);
    } catch (error) {
        let message: string = 'There was an error creating your new directory.';

        if (error instanceof mongoose.Error.ValidationError) {
            message = error.message;
        }

        return res.send({ error: message });
    }
});

export default directoryController;