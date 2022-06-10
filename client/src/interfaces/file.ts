import {Folder} from "./folder";

export interface File {
    name: string;
    size: number;
    extension: string;
    created: Date;
  //  folder: Folder;
}