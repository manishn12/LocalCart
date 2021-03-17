
import dotenv  from "dotenv"
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './routes/user.js';
import Product from './routes/product.js';

dotenv.config()

const app =express();
app.use(cors());


app.use(express.json());
app.use(bodyParser.json({limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use("/user", User);
app.use("/",Product);



const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL , {useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>  app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify' , false);