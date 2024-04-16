import express from 'express';
import { createTransaction } from '../Controllers/TransactionController.js'



const router = express.Router();


router.post('/transactions', createTransaction)


export default router;