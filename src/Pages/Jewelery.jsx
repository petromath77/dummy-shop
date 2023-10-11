import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJeweleryGoods } from '../features/JewelerySlice';
import GoodsWrapper from '../Goods/GoodsWrapper';
import Section from '../UI/Section';

const Jewelery = () => {
  const dispatch = useDispatch();
  const {goods, status, error} = useSelector(state => state.jewelery);

  useEffect(() => {
    dispatch(fetchJeweleryGoods());
  }, [dispatch])

  return (
    <Section>
      <GoodsWrapper goods={goods} status={status} error={error}/>
    </Section>
  )
}

export default Jewelery