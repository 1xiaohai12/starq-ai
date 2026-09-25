const router=require('express').Router();
const db=require('../config/database');

router.post('/create',async(req,res)=>{
 const {email,product,amount}=req.body;
 const orderNo=Date.now();

 await db.query(
  'INSERT INTO orders(order_no,email,product,amount,status) VALUES(?,?,?,?,?)',
  [orderNo,email,product,amount,'pending']
 );

 res.json({success:true,order_no:orderNo});
});

module.exports=router;
