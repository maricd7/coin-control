import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import  mongoose  from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();
import AuthRoute from './routes/AuthRoute.mjs'
import TransactionRoute from './routes/TransactionRoute.mjs'
import Transaction from "./Models/Transaction.mjs";
const PORT = process.env.PORT || 5050;
const app = express();




app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "https://coin-control-wine.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


mongoose.connect(process.env.ATLAS_URI)
.then(async () => {
  console.log("MongoDB is connected successfully");

  // Check if the index exists before dropping it
  const indexExists = await Transaction.collection.indexExists("transactionType_1");
  if (indexExists) {
    await Transaction.collection.dropIndex("transactionType_1", (err, result) => {
      if (err) {
        console.error("Error dropping index:", err);
      } else {
        console.log("Index dropped successfully:", result);
      }
    });
  } else {
    console.log("Index 'transactionType_1' does not exist.");
  }

  // Check indexes after dropping (optional)
  Transaction.collection.getIndexes((err, indexes) => {
    if (err) {
      console.error("Error fetching indexes:", err);
    } else {
      console.log("Indexes:", indexes);
    }
  });

  // Start the server after dropping the index
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
})
.catch((err) => console.error(err));



// managing cookie-based sessions
app.use(cookieParser());


//making server aware of routes
app.use("/", AuthRoute);
app.use('/', TransactionRoute) 



// app.get("/", (req, res) => {
//   res.send("Hello from Vercel!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
