import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import MClothing from './MClothing';
import WClothing from './WClothing';
 
const Pages = () => {
  return (
    <div className="flex-grow">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<NotFound />}/>
            <Route path='/men-clothing' element={<MClothing />}/>
            <Route path='/woman-clothing' element={<WClothing />}/>
            <Route path='/electronics' element={<Electronics />}/>
            <Route path='/jewelery' element={<Jewelery />}/>
        </Routes>
    </div>
  )
}

export default Pages