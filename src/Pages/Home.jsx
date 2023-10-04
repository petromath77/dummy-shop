import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGoods } from '../features/GoodsSlice';
import GoodsWrapper from '../Goods/GoodsWrapper';
import Section from '../UI/Section';

const Home = () => {
  const dispatch = useDispatch();
  const {goods, status, error} = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchAllGoods());
  }, [dispatch])

  return (
    <Section>
      <GoodsWrapper goods={goods} status={status} error={error}/>
    </Section>
  )
}

export default Home