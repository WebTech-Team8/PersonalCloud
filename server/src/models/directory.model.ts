import { model, Schema } from "mongoose";
import { IDirectory } from "../interfaces/directory.interface";

const directorySchema = new Schema<IDirectory>({
    id: Schema.Types.ObjectId,
    name: {
        type: Schema.Types.String,
        required: true
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isRootDir: {
        type: Schema.Types.Boolean,
        default: 'false'
    },
    parentDirId: {
        type: Schema.Types.ObjectId,
        ref: 'Directory',
        required: false
    },
    files: [{
        type: Schema.Types.ObjectId,
        ref: 'File'
    }],
    childDirectories: [{
        type: Schema.Types.ObjectId,
        ref: 'Directory'
    }]
});

export const DirectoryModel = model<IDirectory>('Directory', directorySchema);