import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Detail from './Detail';
import Cart from './Cart';
import Products from './Products';
import AboutUs from './AboutUs';
import Contacts from './Contacts';
import Checkout from './Checkout';
import Thanks from './Thanks';
 
const Pages = () => {
  return (
    <div className="flex-grow">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<NotFound />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/products/:id' element={<Detail />}/>
            <Route path='/about-us' element={<AboutUs />}/>
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/thanks' element={<Thanks />}/>
        </Routes>
    </div>
  )
}

export default Pages