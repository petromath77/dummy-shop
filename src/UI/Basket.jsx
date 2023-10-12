import { RiShoppingBasketLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Basket = () => {
  const itemsCount = useSelector(state => state.cart.cart);
  return (
    <NavLink to='/cart'>
        <div className="relative">
            <div className="absolute -right-[30%] -top-0.5 bg-slate-300 py-0.5 px-1 rounded-full">
                <div className="text-xs leading-none">{itemsCount.length}</div>
            </div>
            <RiShoppingBasketLine style={iconBasket} />
        </div>
    </NavLink>
  )
}

const iconBasket = {color: "#475569", fontSize: '30px'};

export default Basket