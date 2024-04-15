import express from 'express';
import {SignUp, Login} from '../Controllers/AuthController.js';
import Transaction from '../Models/Transaction.js';

const router = express.Router();

router.post('/signup', SignUp);
router.post('/login', Login)
router.post('/transactions',Transaction)
export default router;