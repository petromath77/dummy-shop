import {NavLink} from 'react-router-dom';

const GoodsCard = ({id, image, price, title}) => {

  return (
    <NavLink to={`/products/${id}`} className='flex flex-col flex-start p-4 border border-slate-400 rounded-xl hover:shadow-lg ease duration-300'>
        <img className='w-56 h-56 mb-4 my-0 mx-auto object-contain' src={image} alt="" loading="lazy" />
        <div>
          <h4 className='mt-4 font-bold'>{title}</h4>
          <div className='mt-4'>{price}$</div>
        </div>
    </NavLink>
  )
}

export default GoodsCard