import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import setupDatabase from './src/data/database';
import setupRouter from './src/routes';
import multer from 'multer';
import fileController from './src/controllers/file.controller'

startServer();

async function startServer() {
    dotenv.config();

    const app = express();
    const upload = multer();

    app.use(cors());
    app.use(express.json());

    app.post('/uploadFile', upload.single('file'), fileController.uploadFile)
    
    // Establishing database connection
    const dbMessage = await setupDatabase();
    console.log(dbMessage);

    // Route configuration
    setupRouter(app, '/api');
    
    // Starting the server
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}...`)
    });
}