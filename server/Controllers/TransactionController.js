import Transaction from "../Models/Transaction.js";

//handle transcation post 

export const createTransaction = async (req, res, next) => {
    try {
      const { transactionType, amount, name, createdAt } = req.body;
      const transaction = await Transaction.create({ transactionType, amount,name, createdAt });
      res.status(201).json({ message: 'Transaction is submitted.', success: true, user });
      next();
    } catch (error) {
      console.error(error);
    }
  };