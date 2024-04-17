import mongoose from 'mongoose';



const { Schema, model } = mongoose;

const transactionSchema = new Schema({
    transactionType: {
      type: String,
      // required: [true, 'Plase enter transaction type'],
    },
    amount: {
      type: Number,
      // required: [true, 'Plase enter value.'],
    },
    name: {
      type: String,
      // required: [true, 'Plase enter name of the transcation.'],
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    user:{
        type:String,
    }
  });
  
  
  export default model('Transaction', transactionSchema);