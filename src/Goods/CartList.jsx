import CartCard from './CartCard';
import { useSelector } from 'react-redux';

const CartList = () => {
    const carts = useSelector(state => state.cart.cart);

  return (
    <div className="mx-auto max-w-xl flex flex-col gap-4">
        {carts.length === 0 && <div className="font-bold">No Products In The Cart</div>}
        {carts.map( cart => 
                <CartCard key={cart.id} cart={cart} />
             )
        }
    </div>
  )
}

export default CartList