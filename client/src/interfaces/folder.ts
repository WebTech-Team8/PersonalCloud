import {File} from './file'

export interface Folder {
    name: string;
    files?: File[];
    size: number;
    created: Date;
}