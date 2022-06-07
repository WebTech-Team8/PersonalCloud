import { IFile } from "./file.interface";

export interface IDirectory {
    id: string,
    name: string,
    parentDirId: string,
    childDirectories: string[],
    files: IFile[],
    ownerId: string,
    isRootDir: boolean
}