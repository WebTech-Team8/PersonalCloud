import { Router, Application } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

export default function setup(app: Application, path: string) : void {
    router.use('/auth', authController);

    app.use(path, router);
}