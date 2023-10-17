import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoodsCard from './GoodsCard';
import { addCart } from '../features/CartSlice';
import Button from '../UI/Button';

const GoodsList = () => {
  const filterMenu = [
      {'': 'All'},
      {'men\'s clothing': 'Men\'s Clothing'},
      {'women\'s clothing': 'Woman\'s Clothing'},
      {'electronics': 'Electronics'},
      {'jewelery': 'Jewelery'}
  ];

  const { goods } = useSelector(state => state.goods);
  const [filtered, setFiltered] = useState(goods);
  const [active, setActive] = useState(false);

  const dispath = useDispatch();

  const addProduct = (item) => {
    dispath(addCart(item));
  }

  const filterProducts = (type) => {
    const filter = goods.filter((item) => item.category === type);
    type.length > 0 ? setFiltered(filter) : setFiltered(goods);
    setActive(true);
  }

  return (
    <>  
        <h2 className='pb-4 mt-4 font-bold text-2xl border-solid border-b border-slate-400'>All Products</h2>
        <div className='flex justify-center w-fit mx-auto my-8 gap-4'>
          {filterMenu.map(item => 
            <Button className={active === true ? 'px-3 py-1 mt-4 active-filter' : 'px-3 py-1 mt-4'} handler={() => filterProducts(`${Object.keys(item)}`) }>{Object.values(item)}</Button>
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