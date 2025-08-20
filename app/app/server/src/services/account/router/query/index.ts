import express, { Router } from 'express';
import dotenv from 'dotenv';
import authentication from '@src/auth';
import Handle_IsSignin from './handle/isSignin';
import Handle_Query_Contacts from './handle/contacts';

dotenv.config();
const router_query_account: Router = express.Router();

const handle_isSignin = new Handle_IsSignin();
const handle_query_contacts = new Handle_Query_Contacts();

router_query_account.get('/isSignin', handle_isSignin.main);

router_query_account.get('/contacts', authentication, handle_query_contacts.main);

export default router_query_account;
