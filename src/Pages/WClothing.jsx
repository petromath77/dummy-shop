import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWomenGoods } from '../features/WomenGoodsSlice';
import GoodsWrapper from '../Goods/GoodsWrapper';
import Section from '../UI/Section';

const WClothing = () => {
  const dispatch = useDispatch();
  const {goods, status, error} = useSelector(state => state.womens);

  useEffect(() => {
    dispatch(fetchWomenGoods());
  }, [dispatch])

  return (
    <Section>
      <GoodsWrapper goods={goods} status={status} error={error}/>
    </Section>
  )
}

export default WClothing