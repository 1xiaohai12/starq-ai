import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy';

export default function App(){
 return <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/buy" element={<Buy/>}/>
 </Routes>
}
