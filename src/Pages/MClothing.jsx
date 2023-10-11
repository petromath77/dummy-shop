import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenGoods } from '../features/MenGoodsSlice';
import GoodsWrapper from '../Goods/GoodsWrapper';
import Section from '../UI/Section';

const MClothing = () => {
  const dispatch = useDispatch();
  const {goods, status, error} = useSelector(state => state.mens);

  useEffect(() => {
    dispatch(fetchMenGoods());
  }, [dispatch])

  return (
    <Section>
      <GoodsWrapper goods={goods} status={status} error={error}/>
    </Section>
  )
}

export default MClothing