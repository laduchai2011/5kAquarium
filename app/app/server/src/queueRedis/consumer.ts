// import Redis from "ioredis";
import { redis_server } from "@src/connect";

// const redis = new Redis();

export async function consumeTasks<T>(key: string, callback: (data: T) => void) {
    while (true) {
        // const task = await redis.blpop(key, 0); // 0 = chờ vô hạn
        const task = await redis_server.get_client().blPop(key, 0); // 0 = chờ vô hạn
        if (task) {
            const value = task.element;
            const job: T = JSON.parse(value);
            callback(job);
        }
    }
}