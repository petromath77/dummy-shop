import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElectronicsGoods } from '../features/ElectronicsSlice';
import GoodsWrapper from '../Goods/GoodsWrapper';

const Electronics = () => {
  const dispatch = useDispatch();
  const {goods, status, error} = useSelector(state => state.electronics);

  useEffect(() => {
    dispatch(fetchElectronicsGoods());
  }, [dispatch])

  return (
    <section className="w-full mx-auto max-w-5xl px-4 py-8">
      <GoodsWrapper goods={goods} status={status} error={error}/>
    </section>
  )
}

export default Electronics