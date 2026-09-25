require('dotenv').config();
const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/order',require('./routes/order'));
app.use('/api/payment',require('./routes/payment'));
app.use('/api/query',require('./routes/query'));

app.listen(process.env.PORT||3000,()=>{
 console.log('星启AI v1.2 running');
});
