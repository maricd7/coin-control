import express from 'express';
import { createTransaction,getAllTransactions } from '../Controllers/TransactionController.mjs'



const router = express.Router();


router.post('/transactions', createTransaction)
router.get('/transactions', getAllTransactions);


export default router;