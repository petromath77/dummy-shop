import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import MClothing from './MClothing';
import WClothing from './WClothing';
import Detail from './Detail';
import Cart from './Cart';
 
const Pages = () => {
  return (
    <div className="flex-grow">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<NotFound />}/>
            <Route path='/products/:id' element={<Detail />}/>
            <Route path='/men-clothing' element={<MClothing />}/>
            <Route path='/woman-clothing' element={<WClothing />}/>
            <Route path='/electronics' element={<Electronics />}/>
            <Route path='/jewelery' element={<Jewelery />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    </div>
  )
}

export default Pages