import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJeweleryGoods } from '../features/JewelerySlice';
import GoodsWrapper from '../Goods/GoodsWrapper';

const Jewelery = () => {
  const dispatch = useDispatch();
  const {goods, status, error} = useSelector(state => state.jewelery);

  useEffect(() => {
    dispatch(fetchJeweleryGoods());
  }, [dispatch])

  return (
    <section className="w-full mx-auto max-w-5xl px-4 py-8">
      <GoodsWrapper goods={goods} status={status} error={error}/>
    </section>
  )
}

export default Jewelery