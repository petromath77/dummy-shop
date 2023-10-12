import React from 'react'
import Button from '../UI/Button';

const CartCard = ({cart, addQuantity, reduceQuantity, removeCartItem}) => {
    const { image, price, title, cartQuantity } = cart;
  return (
    <div className='flex justify-between p-4 border border-slate-400 rounded-xl hover:shadow-lg ease duration-300'>
        <img className='w-56 h-56 object-contain' src={image} alt="" loading="lazy" />
        <div className='w-xxs'>
          <div className='mt-4 font-bold'>{title}</div>
          <div className='mt-4 font-bold'>Cost: {price}$</div>
          <div className='flex flex-col justify-center mt-4 font-bold'>
            <div>Quantity:</div>
            <div className='flex align-center mt-2 mx-auto'>
              <Button handler={reduceQuantity} className='px-3 py-1 mt-0'>-</Button>
              <div className='w-50 h-8 p-2 mx-2 rounded-md text-center leading-3 border-solid border-2 border-slate-400'>{cartQuantity}</div>
              <Button handler={addQuantity} className='px-3 py-1 mt-0'>+</Button>
            </div> 
          </div>
          <Button handler={removeCartItem} className='px-3 py-1 mt-4'>Remove</Button>
        </div>
    </div>
  )
}

export default CartCard