import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import  mongoose  from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();
import AuthRoute from './routes/AuthRoute.js'

const PORT = process.env.PORT || 5050;
const app = express();




app.use(express.json());

console.log("Atlas URI:", process.env.ATLAS_URI);

// connect to db
// mongoose.connect(process.env.ATLAS_URI)
// .then(()=>{
//   app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
//   });
// })
// .catch((error)=>{
//   console.log(error)
// })


mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:5050"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// managing cookie-based sessions
app.use(cookieParser());

app.use(express.json());

//making server aware of routes
app.use("/", AuthRoute);
