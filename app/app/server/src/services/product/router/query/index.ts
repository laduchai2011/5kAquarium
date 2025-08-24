import express, { Router } from 'express';
import dotenv from 'dotenv';
// import authentication from '@src/auth';
import Handle_Get_AProductWithId from './handle/GetAProductWithId';


dotenv.config();
const router_query_product: Router = express.Router();

const handle_get_aProductWithId = new Handle_Get_AProductWithId();


router_query_product.get(
    '/getAProductWithId',
    handle_get_aProductWithId.main
);



export default router_query_product;
