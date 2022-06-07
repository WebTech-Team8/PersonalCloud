import { Application } from 'express';
import authController from '../controllers/auth.controller';

export default function setup(app: Application) : void {
    app.use('/auth', authController);
}