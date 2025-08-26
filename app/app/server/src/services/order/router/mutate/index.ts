import express, { Router } from 'express';
import dotenv from 'dotenv';
// import Handle_Signup from './handle/AddOrder';

dotenv.config();

const router_mutate_order: Router = express.Router();
// const handle_signup = new Handle_Signup();


router_mutate_order.post(
    '/signup',
    // handle_signup.setup,
    // handle_signup.isAccountCheckUserName,
    // handle_signup.isAccountCheckPhone,
    // handle_signup.main
);

export default router_mutate_order;
