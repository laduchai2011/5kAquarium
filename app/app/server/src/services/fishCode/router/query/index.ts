import express, { Router } from 'express';
import dotenv from 'dotenv';
import authentication from '@src/auth';
import Handle_Get_FishCodes from './handle/GetFishCodes';


dotenv.config();
const router_query_fishCode: Router = express.Router();

const handle_get_fishCodes = new Handle_Get_FishCodes();


router_query_fishCode.get(
    '/fishcodes',
    authentication, 
    handle_get_fishCodes.main
);



export default router_query_fishCode;
