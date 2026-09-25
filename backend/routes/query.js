const router=require('express').Router();
const db=require('../config/database');

router.get('/:order',async(req,res)=>{
 const [rows]=await db.query(
  'SELECT * FROM orders WHERE order_no=?',
  [req.params.order]
 );
 res.json(rows[0]||{});
});

module.exports=router;
