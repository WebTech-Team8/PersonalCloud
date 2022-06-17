import { Router } from "express";
import mongoose from "mongoose";
import { IAuthenticatedRequest } from "../interfaces/auth-request.interface";
import { IDirectory } from "../interfaces/directory.interface";
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
        const directory = (await directoryService.createDir(dirName, ownerId, parentId)) as IDirectory;

        if (parentId) {
            directoryService.addDirToParentChildren(parentId, directory.id);
        }

        return res.json(directory);
    } catch (error) {
        let message: string = 'There was an error creating your new directory.';

        if (error instanceof mongoose.Error.ValidationError) {
            message = error.message;
        }

        return res.send({ error: message });
    }
});

directoryController.get('/:directoryId', async (req ,res) => {
    const directoryId = req.params.directoryId;
    const isDirectoryExistent = await directoryService.exists(directoryId);

    if (!isDirectoryExistent) {
        return res.json({ error: 'There is no directory with such id.' });
    }

    const directory = await directoryService.getById(directoryId);

    return res.json(directory);
});

directoryController.get('/root/:ownerId', async (req, res) => {
    const ownerId = req.params.ownerId;
    
    const rootDir = await directoryService.getUserRootDir(ownerId);

    if (!rootDir) {
        return res.status(400).json({ error: 'User does not have directories.' });
    }

    return res.json(rootDir);
})

directoryController.patch('/:directoryId', async (req, res) => {
    const directoryId = req.params.directoryId;
    const newDirName = req.body.name;
    const isDirectoryExistent = await directoryService.exists(directoryId);

    if (!isDirectoryExistent) {
        return res.json({ error: 'There is no directory with such id.' });
    }

    const directory = await directoryService.renameDir(directoryId, newDirName);

    return res.json(directory);
});

directoryController.delete('/:directoryId', async (req, res) => {
    const { directoryId } = req.params;
    const directory = await directoryService.getById(directoryId);

    if (!directory) {
        return res.json({ error: 'There is no directory with such id.' });
    }

    const parentId = (directory as IDirectory).parentDirId;
    if (parentId) {
        directoryService.removeChildDirectory(parentId, directoryId);
    }

    const removed = await directoryService.removeDirectory(directoryId);
    if (!removed) {
        return res.json({ error: 'There was an error deleting your directory.' });
    }

    return res.json({ message: 'Directory was successfully deleted.' });
});

export default directoryController;