import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import setupDatabase from './src/data/database';
import setupRouter from './src/routes';

startServer();

async function startServer() {
    dotenv.config();

    const app = express();

    app.use(cors());
    app.use(express.json());
    
    // Establishing database connection
    const dbMessage = await setupDatabase();
    console.log(dbMessage);

    // Route configuration
    setupRouter(app);
    
    // Starting the server
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}...`)
    });
}