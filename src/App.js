import React from 'react';
import VB from './pages/VB';
import Big_cart from './pages/Big_cart';
import Category from './pages/Category';
import { CartProvider } from "react-use-cart";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
   <>
  <CartProvider>
     <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Category />}/>
       <Route path='/VB/:id' element={<VB/>}/> 
       <Route path='/Big_cart' exact element={<Big_cart/>}/> 
     
    </Routes>
  </BrowserRouter>
  </CartProvider>,
  
 
   </>
  );
}

export default App;
