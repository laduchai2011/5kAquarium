import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import router_query_fishCode from './route/query';
// import router_mutate_account from './router/mutate';

const service_fishCode: Express = express();


service_fishCode.use(`/query`, router_query_fishCode);
// service_fishCode.use(`/mutate`, router_mutate_account);

export default service_fishCode;
