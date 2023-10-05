import { useDispatch } from 'react-redux';
import GoodsCard from './GoodsCard';
import { addCart } from '../features/CartSlice';

const GoodsList = ({goods}) => {
  const dispath = useDispatch();
  const addProduct = (item) => {
    dispath(addCart(item));
    console.log(item);
  }

  return (
    <>
        <div className='grid grid-cols-3 gap-6'>
            {goods.map((item) => 
                <GoodsCard addProduct={() => addProduct(item)} key={item.id} {...item}/>
            )}
        </div>
    </>
  )
}

export default GoodsList