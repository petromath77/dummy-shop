import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGoods } from '../features/GoodsSlice';
import GoodsList from '../Goods/GoodsList';
import { Watch } from  'react-loader-spinner'

const Home = () => {
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchAllGoods());
  }, [dispatch])

  return (
    <section className="w-full mx-auto max-w-5xl px-4 py-8">
      {status === 'loading' && <Watch
        height="40"
        width="40"
        radius="44"
        color="#94a3b8"
        ariaLabel="watch-loading"
        wrapperStyle={{justifyContent: 'center', marginBottom: '40px'}}
        wrapperClassName=""
        visible={true}
      />}
      {error && <h2 className='text-2xl font-bold'>Server Error!</h2>}
      {status === 'succeeded' &&
        <GoodsList />
      }
    </section>
  )
}

export default Home