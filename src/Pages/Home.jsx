import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGoods } from '../features/GoodsSlice';
import GoodsWrapper from '../Goods/GoodsWrapper';

const Home = () => {
  const dispatch = useDispatch();
  const {goods, status, error} = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchAllGoods());
  }, [dispatch])

  return (
    <section className="w-full mx-auto max-w-5xl px-4 py-8">
      <GoodsWrapper goods={goods} status={status} error={error}/>
    </section>
  )
}

export default Home