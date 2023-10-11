import React from 'react'

const CartCard = ({cart}) => {
    const { image, price, title, cartQuantity } = cart;
  return (
    <div className='flex justify-between p-4 border border-slate-400 rounded-xl hover:shadow-lg ease duration-300'>
        <img className='w-56 h-56 object-contain' src={image} alt="" loading="lazy" />
        <div className='w-xxs'>
          <div className='mt-4 font-bold'>{title}</div>
          <div className='mt-4 font-bold'>Cost: {price}$</div>
          <div className='mt-4 font-bold'>Quantity: {cartQuantity}</div>
        </div>
    </div>
  )
}

export default CartCard