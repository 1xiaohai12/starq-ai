
function showProduct(n){
 document.getElementById('title').innerText='购买 '+n;
 document.getElementById('modal').style.display='flex';
}
function hide(){
 document.getElementById('modal').style.display='none';
}
function createOrder(){
 alert('订单已创建（支付接口待接入）');
 hide();
}
function query(){
 let v=document.getElementById('order').value;
 document.getElementById('msg').innerText=v?'查询订单：'+v+'（接口待接入）':'请输入订单号';
}
