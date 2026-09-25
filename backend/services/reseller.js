const axios=require('axios');

async function useCard(data){
 return axios.post(
  process.env.SUPPLIER_URL+'/api/v1/kami/use',
  data,
  {
   headers:{
    'X-Reseller-Token':process.env.SUPPLIER_TOKEN
   }
  }
 ).then(r=>r.data);
}

module.exports={useCard};
