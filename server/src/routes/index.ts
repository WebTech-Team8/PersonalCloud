import { Router, Application } from 'express';
import authController from '../controllers/auth.controller';
import directoryController from '../controllers/directory.controller';
import fileController from '../controllers/file.controller';

const router = Router();

export default function setup(app: Application, path: string) : void {
    router.use('/auth', authController);
    router.use('/directories', directoryController);
    router.use('/files', fileController);

    app.use(path, router);
}