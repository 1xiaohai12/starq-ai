import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
 res.json({name:'星启GPT API',version:'1.1'});
});

app.listen(process.env.PORT||3000,()=>{
 console.log('API running');
});
