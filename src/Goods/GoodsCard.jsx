import React from 'react'

const GoodsCard = ({category, description, image, price, title}) => {
  return (
    <div className='flex flex-col justify-between p-4 border border-slate-400 rounded-xl'>
        <img className='w-56 h-56 my-0 mx-auto object-contain' src={image} alt="" />
        <div>
            <h4 className='mt-4 font-bold'>{title}</h4>
            <div className='mt-4'>{price}$</div>
        </div>
    </div>
  )
}

export default GoodsCard