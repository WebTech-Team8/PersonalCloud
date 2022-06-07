import { IDirectory } from "./directory.interface";

export interface IFile {
    id: string,
    name: string,
    extension: string,
    type: string,
    ownerId: string,
    directoryId: string
}