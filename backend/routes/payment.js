const router=require('express').Router();

router.post('/create',(req,res)=>{
 res.json({
  success:true,
  url:'/pay.html?order='+req.body.order
 });
});

module.exports=router;
