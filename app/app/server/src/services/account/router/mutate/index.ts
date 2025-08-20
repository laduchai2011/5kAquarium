import express, { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import Handle_Signup from './handle/signup';
import Handle_Signin from './handle/signin';
import Handle_AddContact from './handle/AddContact';
import authentication from '@src/auth';

dotenv.config();

const router_mutate_account: Router = express.Router();
const handle_signup = new Handle_Signup();
const handle_signin = new Handle_Signin();
const handle_addContact = new Handle_AddContact();

router_mutate_account.post('/', (_: Request, res: Response) => {
    res.send('(POST) Express + TypeScript Server: router_mutate_account');
});

router_mutate_account.post(
    '/signup',
    handle_signup.setup,
    handle_signup.isAccountCheckUserName,
    handle_signup.isAccountCheckPhone,
    handle_signup.main
);

router_mutate_account.post(
    '/signin',
    handle_signin.main
);

router_mutate_account.post(
    '/addContact',
    authentication,
    handle_addContact.setup,
    handle_addContact.main
);

export default router_mutate_account;
