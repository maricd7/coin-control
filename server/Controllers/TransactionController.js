import Transaction from "../Models/Transaction.mjs";

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


  //handle transaction get
  export const getAllTransactions = async (req, res) => {
    try {
        const { username } = req.query;

        const filter = username ? { username } : {};

        const transactions = await Transaction.find(filter);
        
        res.status(200).json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};