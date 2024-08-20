import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';


function App() {


  return (
    <div>
       <Routes>
       <Route path="/" element={<Home />} />  
       <Route path="/product/:productId" element={<ProductDetail />} />

       </Routes>
   
    </div>
  )
}

export default App
