import express, { Request, Response } from 'express';
import next from 'next';
import mongoose from 'mongoose';
import userRoutes from './routes/users'; // Asegúrate de tener rutas para usuarios

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    mongoose.connect('localhost:27017/my-flights')
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('MongoDB connection error:', err);
        });

    server.use(express.json());

    // Rutas
    server.use('/api/users', userRoutes);
    server.use('/api/flights', require('./routes/flights'));

    server.get('*', (req: Request, res: Response) => {
        return handle(req, res);
    });

    server.listen(3000, (err?: any) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
