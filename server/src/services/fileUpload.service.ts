import { Multer } from 'multer';
import { v4 as uuidv4 } from 'uuid'
import path from 'path';

class FileUploadService{

    private file: Express.Multer.File

    constructor(file: Express.Multer.File) {
        this.file = file
    }

    private getFileExtension(): string {
        return path.extname(this.file.originalname)
    }

    //checks if the file is created
    async createFileUpload(): Promise<number> {
        const uniqueFileName = this.createUniqueFileName()
        const fileId = await this.createFileRecord(uniqueFileName)

        this.writeToFileStream(uniqueFileName)

        return fileId
    }

    //creating an unique file name with the date and time
    private createUniqueFileName(): string{
        const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "")
        return `${uuidv4()}_${timeStamp}${this.getFileExtension()}`
    }



}

export default FileUploadService;