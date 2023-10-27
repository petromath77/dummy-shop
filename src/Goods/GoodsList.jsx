import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoodsCard from './GoodsCard';
import { addCart } from '../features/CartSlice';
import Button from '../UI/Button';

const GoodsList = () => {
  const filterMenu = [
      {
        '': 'All',
        type: 'all'
      },
      {
        'men\'s clothing': 'Men\'s Clothing',
        type: 'men\'s'
      },
      {
        'women\'s clothing': 'Woman\'s Clothing',
        type: 'women\'s'},
      {
        'electronics': 'Electronics',
        type: 'electronics'
      },
      {
        'jewelery': 'Jewelery',
        type: 'jewelery'
      }
  ];

  const { goods } = useSelector(state => state.goods);
  const [filtered, setFiltered] = useState(goods);
  const [active, setActive] = useState('all');

  const dispatch = useDispatch();

  const addProduct = (item) => {
    dispatch(addCart(item));
  }

  const filterProducts = (category, type) => {
    const filter = goods.filter((item) => item.category === category);
    category.length > 0 ? setFiltered(filter) : setFiltered(goods);
    setActive(type);
  }

  return (
    <>  
        <h2 className='heading-2'>All Products</h2>
        <div className='flex justify-center w-fit mx-auto my-8 gap-4'>
          {filterMenu.map(item => 
            <Button type='button' key={Object.values(item)[1]} className={active === `${Object.values(item)[1]}` ? 'px-3 py-1 mt-4 active-filter' : 'px-3 py-1 mt-4'} handler={() => filterProducts(`${Object.keys(item)[0]}`, `${Object.values(item)[1]}`) }>{Object.values(item)[0]}</Button>
          )}
        </div>
        <div className='grid grid-cols-3 gap-6'>
            {filtered.map((item) => 
                <GoodsCard addProduct={() => addProduct(item)} key={item.id} {...item}/>
            )}
        </div>
    </>
  )
}

export default GoodsList