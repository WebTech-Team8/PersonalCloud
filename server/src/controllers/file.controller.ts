import { Router } from "express";
import express from 'express';
import FileUploadService from "../services/fileUpload.service";

//const fileController = Router();

let instance: null | FileController = null

class FileController {

    static getInstance(): FileController {
        if (instance === null) {
            instance = new FileController()
            return instance
        }

        return instance
    }

    async uploadFile(request: express.Request, response: express.Response) {
        try {
            const file = request.file
            const fileUploadService = new FileUploadService(file)
            const fileId = await fileUploadService.createFileUpload()

            if (fileId === 0) {
                return response.status(500).json({
                    success: false,
                    message: 'Error uploading file'
                })
            }

            response.json({
                success: true,
                fileId
            })

        } catch (error) {
            response.json({
                success: false
            })
        }
    }
}

export default FileController.getInstance();
//export default fileController;