import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import router_query_product from './router/query';
// import router_mutate_account from './router/mutate';

const service_product: Express = express();

service_product.use(`/query`, router_query_product);
// service_product.use(`/mutate`, router_mutate_account);

export default service_product;
