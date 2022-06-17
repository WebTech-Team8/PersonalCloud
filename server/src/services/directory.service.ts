import mongoose from "mongoose";
import { DirectoryModel } from "../models/directory.model";

async function isRootDir(userId: string) {
    return (await DirectoryModel.find({ ownerId: userId })).length === 0;
}

async function isDirNameUsed(parentId: string, dirName: string) {
    const parent = await DirectoryModel.findOne({id: parentId});
    
    const existingDir = await DirectoryModel.find({ id: { $in: parent?.childDirectories }, name: dirName });

    return existingDir.length !== 0;
}

async function createDir(dirName: string, ownerId: string, parent: string) {
    const directory = new DirectoryModel({
        id: new mongoose.Types.ObjectId(),
        name: dirName,
        ownerId: ownerId,
        isRootDir: await isRootDir(ownerId),
        parentDirId: parent,
        childDirectories: [],
        files: []
    });

    const validation = directory.validateSync();
    if (validation) {
        throw validation;
    }

    return await directory.save();
}

async function addDirToParentChildren(parentId: string, directoryId: string) {
    const parent = await DirectoryModel.findOne({id: parentId});
    parent?.childDirectories.push(directoryId);
    return await parent?.save();
}

async function renameDir(directoryId: string, dirName: string) {
    return await DirectoryModel.findByIdAndUpdate(directoryId, { name: dirName }, { new: true });
}

async function exists(id: string) {
    return await DirectoryModel.exists({ id });
}

async function getById(id: string) {
    return await DirectoryModel.findOne({ id });
}

async function getUserRootDir(ownerId: string) {
    return await DirectoryModel.findOne({ ownerId, isRootDir: true });
}

async function removeDirectory(directoryId: string) {
    return await DirectoryModel.findOneAndDelete({ id: directoryId });
}

async function removeChildDirectory(parentId: string, directoryId: string) {
    return await DirectoryModel.findOneAndUpdate({ _id: parentId }, { $pull: { childDirectories: directoryId } });
}

export {
    isRootDir,
    isDirNameUsed,
    createDir,
    addDirToParentChildren,
    renameDir,
    exists,
    getById,
    getUserRootDir,
    removeDirectory,
    removeChildDirectory
}