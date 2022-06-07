import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/PersonalCloudDB';
console.log('MongoDB URI:', MONGODB_URI);

export default async function initialize() {
    return new Promise((resolve, reject) => {
        mongoose.connect(MONGODB_URI);

        const db = mongoose.connection;

        db.on('error', err => {
            reject(err.message);
        });

        db.on('open', () => {
            resolve('Database connected');
        });
    });
}