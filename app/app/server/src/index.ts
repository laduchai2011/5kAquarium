import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import process from 'process';

dotenv.config();

import service_account from '@src/services/account';
import service_order from '@src/services/order';
import service_image from './services/image';

const app: Express = express();
const port = process.env.PORT || 3006;

app.use(cookieParser());
app.use(`/api`, express.json());
app.use(`/api`, express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://192.168.5.100:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    // ✅ Trả về OK cho preflight request
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    
    next();
});

app.use(`/api/service_account`, service_account);
app.use(`/api/service_order`, service_order);
app.use(`/api/service_image`, service_image);

app.use('/watch1', express.static(path.join(process.cwd(), 'data', 'video', 'output', 'video.mp4')));

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
