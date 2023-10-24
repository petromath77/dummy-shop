import CartCard from './CartCard';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../features/CartSlice';

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
        {carts.length > 0 && <div className='w-max px-6 py-2 ml-auto bg-slate-200 border border-slate-400 rounded-xl font-bold text-lg text-right'>Total Cost: {totalCost}$</div>}
    </div>
  )
}

export default CartList