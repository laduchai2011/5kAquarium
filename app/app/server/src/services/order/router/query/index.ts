import express, { Router } from 'express';
import dotenv from 'dotenv';
// import Handle_Login from './handle/login';

dotenv.config();
const router_query_order: Router = express.Router();

// const handle_login = new Handle_Login();

router_query_order.get(
    '/', 
    // handle_login.main
);

export default router_query_order;
