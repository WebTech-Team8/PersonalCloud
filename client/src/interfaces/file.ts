import {Folder} from "./folder";

export interface File {
    name: string;
    size: number;
    type: string;
    created: Date;
    folder: Folder;
}