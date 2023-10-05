import {NavLink} from 'react-router-dom';
import Button from '../UI/Button';

const GoodsCard = ({id, image, price, title, addProduct}) => {

  return (
    <div className='flex flex-col flex-start p-4 border border-slate-400 rounded-xl hover:shadow-lg ease duration-300'>
        <img className='w-56 h-56 mb-4 my-0 mx-auto object-contain' src={image} alt="" loading="lazy" />
        <div>
          <NavLink to={`/products/${id}`} className='mt-4 font-bold hover:underline'>{title}</NavLink>
          <div className='mt-4'>{price}$</div>
          <Button addProduct={addProduct}>Add To Cart</Button>
        </div>
    </div>
  )
}

export default GoodsCard