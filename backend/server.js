import bodyParser from 'body-parser';
import express from 'express'
import mongoose from 'mongoose';

import cors from 'cors'
import dotenv from 'dotenv';


dotenv.config();

import personRoutes from './routes/personRoutes.js'



const app = express();

app.use(cors());

app.use(bodyParser.json())


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err))

app.use('/person', personRoutes)

const PORT = process.env.PORT || 5000


app.listen(PORT,()=> console.log(`Server Running on PORT${PORT}`))