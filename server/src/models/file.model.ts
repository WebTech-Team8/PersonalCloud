import { model, Schema } from "mongoose";
import { IFile } from "../interfaces/file.interface";

const fileSchema = new Schema<IFile>({
    id: Schema.Types.ObjectId,
    name: {
        type: Schema.Types.String,
        required: true
    },
    type: {
        type: Schema.Types.String,
        required: false
    },
    extension: {
        type: Schema.Types.String,
        required: false
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    directoryId: {
        type: Schema.Types.String,
        ref: 'Directory'
    }
});

export const FileModel = model<IFile>('File', fileSchema);