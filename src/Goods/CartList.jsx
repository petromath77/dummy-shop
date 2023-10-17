import CartCard from './CartCard';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../features/CartSlice';

const CartList = () => {
    const carts = useSelector(state => state.cart.cart);

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
        {carts.length === 0 && <div className="font-bold text-xl">No Products In The Cart</div>}
        {carts.map( cart => 
                <CartCard removeCartItem={() => removeCartItem(cart)} reduceQuantity={() => reduceQuantity(cart)} addQuantity={() => addQuantity(cart)} key={cart.id} cart={cart} />
             )
        }
    </div>
  )
}

export default CartList