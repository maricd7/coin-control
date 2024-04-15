import express from "express";
import Transaction from "../Models/Transaction";
import authMiddleware from "../middleware/auth";
const router = express.Router();


router.post('/', authMiddleware, async (req, res) => {
    try {
        const { name, type, amount } = req.body;
        const newTransaction = new Transaction({
            user: req.user._id, 
            name,
            type,
            amount
        });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;