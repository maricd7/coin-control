import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import  mongoose  from "mongoose";
const PORT = process.env.PORT || 5050;
const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());

console.log("Atlas URI:", process.env.ATLAS_URI);

// connect to db
mongoose.connect(process.env.ATLAS_URI)
.then(()=>{
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})
.catch((error)=>{
  console.log(error)
})


