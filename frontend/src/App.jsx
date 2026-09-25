import {motion} from 'framer-motion';

export default function App(){
 return <main style={{fontFamily:'-apple-system,BlinkMacSystemFont'}}>
  <nav style={{padding:24}}>星启GPT</nav>
  <section style={{textAlign:'center',padding:80}}>
   <motion.h1 initial={{opacity:0}} animate={{opacity:1}}>
    开启 AI 高效体验
   </motion.h1>
   <p>星启GPT ChatGPT Plus 订阅服务</p>
   <button style={{padding:'12px 30px',borderRadius:30}}>
    微信 / 支付宝购买
   </button>
  </section>
 </main>
}