import Redis from "ioredis";

const redis = new Redis();

export async function consumeTasks<T>(key: string, callback: (data: T) => void) {
    while (true) {
        const task = await redis.blpop(key, 0); // 0 = chờ vô hạn
        if (task) {
            const [, data] = task;
            const job: T = JSON.parse(data);
            callback(job);
        }
    }
}