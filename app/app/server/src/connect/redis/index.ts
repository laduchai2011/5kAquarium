// import dotevn from 'dotenv';
// import { createClient, RedisClientType } from 'redis';
// import { redis_config } from '@src/config';
// import my_interface from '@src/interface';
// import { my_log } from '@src/log';

// dotevn.config();

// class REDIS_Server {
//     private static instance: REDIS_Server;
//     private _redisClient!: RedisClientType;

//     constructor() {
//         if (!REDIS_Server.instance) {
//             const redisConfig: string = `redis://${redis_config?.username}:${redis_config?.password}@${redis_config?.host}:${redis_config?.port}`;

//             this._redisClient = createClient({
//                 url: redisConfig, // Adjust if using a different host or port
//             });

//             this._redisClient.on('error', (err) => {
//                 console.error('Redis Client Error', err);
//             });

//             this._redisClient
//                 .connect()
//                 .then(() => {
//                     my_log.withGreen('REDIS_Server connected successly !');
//                 })
//                 .catch((err) => {
//                     console.error(err);
//                 });

//             REDIS_Server.instance = this;
//         }

//         return REDIS_Server.instance;
//     }

//     get_myConfig(): my_interface['redis']['config'] {
//         return redis_config;
//     }

//     get_client(): RedisClientType {
//         return this._redisClient;
//     }
// }

// export default REDIS_Server;


import dotenv from 'dotenv';
import { createClient, RedisClientType } from 'redis';
import { redis_config } from '@src/config';
import my_interface from '@src/interface';
import { my_log } from '@src/log';

dotenv.config();

class REDIS_Server {
    private static instance: REDIS_Server;
    private _redisClient!: RedisClientType;

    private constructor() {}

    static getInstance(): REDIS_Server {
        if (!REDIS_Server.instance) {
            REDIS_Server.instance = new REDIS_Server();
        }
        return REDIS_Server.instance;
    }

    async init(): Promise<void> {
        if (!this._redisClient) {
            const redisConfig = `redis://${redis_config?.username}:${redis_config?.password}@${redis_config?.host}:${redis_config?.port}`;
            this._redisClient = createClient({ url: redisConfig });

            this._redisClient.on('error', (err) => {
                console.error('Redis Client Error', err);
            });

            await this._redisClient.connect();
            my_log.withGreen('REDIS_Server connected successfully!');
        }
    }

    get_myConfig(): my_interface['redis']['config'] {
        return redis_config;
    }

    get_client(): RedisClientType {
        return this._redisClient;
    }

    async close(): Promise<void> {
        if (this._redisClient) {
            await this._redisClient.quit();
        }
    }
}

export default REDIS_Server;
