import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElectronicsGoods } from '../features/ElectronicsSlice';
import GoodsWrapper from '../Goods/GoodsWrapper';
import Section from '../UI/Section';

const Electronics = () => {
  const dispatch = useDispatch();
  const {goods, status, error} = useSelector(state => state.electronics);

  useEffect(() => {
    dispatch(fetchElectronicsGoods());
  }, [dispatch])

  return (
    <Section>
      <GoodsWrapper goods={goods} status={status} error={error}/>
    </ Section>
  )
}

export default Electronics