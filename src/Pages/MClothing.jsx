import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenGoods } from '../features/MenGoodsSlice';
import GoodsWrapper from '../Goods/GoodsWrapper';

const MClothing = () => {
  const dispatch = useDispatch();
  const {goods, status, error} = useSelector(state => state.mens);

  useEffect(() => {
    dispatch(fetchMenGoods());
  }, [dispatch])

  return (
    <section className="w-full mx-auto max-w-5xl px-4 py-8">
      <GoodsWrapper goods={goods} status={status} error={error}/>
    </section>
  )
}

export default MClothing