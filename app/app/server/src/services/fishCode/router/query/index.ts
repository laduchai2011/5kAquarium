import express, { Router } from 'express';
import dotenv from 'dotenv';
// import authentication from '@src/auth';
import Handle_Get_FishCodes from './handle/GetFishCodes';
import Handle_Get_AFishCodeWithId from './handle/GetAFishCodeWithId';


dotenv.config();
const router_query_fishCode: Router = express.Router();


const handle_get_aFishCodeWithId = new Handle_Get_AFishCodeWithId();
const handle_get_fishCodes = new Handle_Get_FishCodes();



router_query_fishCode.get(
    '/getAFishCodeWithId',
    // authentication,
    handle_get_aFishCodeWithId.main
);


router_query_fishCode.get(
    '/fishcodes',
    // authentication, 
    handle_get_fishCodes.main
);



export default router_query_fishCode;
