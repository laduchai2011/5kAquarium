import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import process from 'process';
import cors from "cors";

dotenv.config();

import service_account from '@src/services/account';
import service_order from '@src/services/order';
import service_image from './services/image';
import service_fishCode from './services/fishCode';
import service_product from './services/product';

// import { produceTask } from './queueRedis/producer';
// import { consumeTasks } from './queueRedis/consumer';
// consumeTasks()
// produceTask({ id: 1, job: "sendEmail" });
// produceTask({ id: 2, job: "generateReport" });

const app: Express = express();
const port = process.env.PORT || 3006;

app.use(cors({
    origin: ["http://172.19.224.1:3000", "http://172.19.224.1:5173"], // domain cho phép
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true // cho phép gửi cookie, Authorization headers
}));

app.use(cookieParser());
app.use(`/api`, express.json());
app.use(`/api`, express.urlencoded({ extended: true }));


app.use(`/api/service_account`, service_account);
app.use(`/api/service_order`, service_order);
app.use(`/api/service_image`, service_image);
app.use(`/api/service_fishCode`, service_fishCode);
app.use(`/api/service_product`, service_product);

app.use('/watch1', express.static(path.join(process.cwd(), 'data', 'video', 'output', 'video.mp4')));

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
