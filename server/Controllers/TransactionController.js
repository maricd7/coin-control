import Transaction from "../Models/Transaction.js";

//handle transcation post 

export const createTransaction = async (req, res, next) => {
    try {
      const { transactionType, amount, name, createdAt,username } = req.body;
      const transaction = await Transaction.create({ transactionType, amount,name, createdAt, username });
      res.status(201).json({ message: 'Transaction is submitted.', success: true,});
      next();
    } catch (error) {
      console.error(error);
    }
  };