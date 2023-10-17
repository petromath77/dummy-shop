import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllGoods } from '../features/GoodsSlice';
import GoodsWrapper from '../Goods/GoodsWrapper';
import Section from '../UI/Section';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGoods());
  }, [dispatch])

  return (
    <Section>
      <GoodsWrapper />
    </Section>
  )
}

export default Products