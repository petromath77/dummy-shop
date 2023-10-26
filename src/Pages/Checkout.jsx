import CheckoutForm from '../Form/CheckoutForm';
import Section from '../UI/Section';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const carts = useSelector(state => state.cart.carts);
  let totalCost = 0;

  return (
    <Section>
      <h2 className='heading-2'>Checkout</h2>
      <div className='max-w-lg mx-auto mt-10'>
        {carts.map( cart => {
            totalCost += cart.cartQuantity * cart.price;
            return (
              <div key={cart.id} className='grid grid-cols-6 items-center p-2 my-4 border border-slate-400 rounded-xl'>
                <div className='w-10 h-10'><img className='w-full h-full object-contain' src={cart.image} loading='lazy' alt='cartImage' /></div>
                <div className='col-span-3'>{cart.title.substring(0, 30)}...</div>
                <div>{cart.cartQuantity}</div>
                <div>{cart.cartQuantity*cart.price}$</div>
              </div>)
          })
        }
        <div className='pb-2 mt-6 text-right font-bold border-b-2 border-slate-400'>Total Cost: {totalCost.toFixed(2)}$</div>
      </div>
      <CheckoutForm />
    </Section>
  )
}

export default Checkout