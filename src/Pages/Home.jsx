import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllGoods } from '../features/GoodsSlice';
import GoodsList from '../Goods/GoodsList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGoods());
  }, [dispatch])

  return (
    <section className="w-full mx-auto max-w-5xl px-4 py-8">
      <GoodsList />
    </section>
  )
}

export default Home