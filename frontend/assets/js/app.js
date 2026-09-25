let product='';
let price=0;

function buyProduct(p,m){
 product=p;
 price=m;
 document.getElementById('buyModal').style.display='block';
}

async function createOrder(){
 let email=document.getElementById('email').value;

 let r=await fetch('/api/order/create',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
   email,
   product,
   amount:price
  })
 });

 let d=await r.json();
 location.href='pay.html?order='+d.order_no;
}
