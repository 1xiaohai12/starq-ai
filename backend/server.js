import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

app.post('/api/order/create',(req,res)=>{
 res.json({
  success:true,
  orderNo:'XQ'+Date.now(),
  plan:req.body.plan || 'plus'
 });
});

app.listen(process.env.PORT||3000,()=>{
 console.log('星启GPT API running');
});
