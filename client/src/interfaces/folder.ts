import {File} from './file'

export interface Folder {
    id: string;
    name: string;
    files?: File[];
    size: number;
    created: Date;
}