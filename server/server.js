import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import  mongoose  from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();
import AuthRoute from './routes/AuthRoute.js'
import TransactionRoute from './routes/TransactionRoute.js'
const PORT = process.env.PORT || 5050;
const app = express();




app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



// managing cookie-based sessions
app.use(cookieParser());

app.use(express.json());

//making server aware of routes
app.use("/", AuthRoute);
app.use('/', TransactionRoute)