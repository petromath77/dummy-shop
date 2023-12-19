import CartCard from './CartCard';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../features/CartSlice';
import { Link } from 'react-router-dom';

const CartList = () => {
    const carts = useSelector(state => state.cart.carts);
    let totalCost = 0;

    const dispath = useDispatch();

    const addQuantity = (item) => {
      dispath(increaseQuantity(item));
    }

    const reduceQuantity = (item) => {
      dispath(decreaseQuantity(item));
    }

    const removeCartItem = (item) => {
      dispath(removeItem(item));
    }

  return (
    <div className="mx-auto max-w-xl flex flex-col gap-4">
        {carts.length === 0 && <div className="font-bold text-xl text-slate-500">No Products In The Cart</div>}
        {carts.map( cart => {
            totalCost += cart.cartQuantity * cart.price;
            return (<CartCard removeCartItem={() => removeCartItem(cart)} reduceQuantity={() => reduceQuantity(cart)} addQuantity={() => addQuantity(cart)} key={cart.id} cart={cart} />)
          })
        }
        {carts.length > 0 && 
          <div>
            <div className='w-max px-6 py-2 ml-auto mt-4 bg-slate-200 border border-slate-400 rounded-xl font-bold text-lg text-right'>Total Cost: {totalCost.toFixed(2)}$</div>
            <Link className='block px-2 py-2 mt-4 buttonLink ease duration-300' to='/checkout'>Checkout</Link>
          </div>}
    </div>
  )
}

export default CartList