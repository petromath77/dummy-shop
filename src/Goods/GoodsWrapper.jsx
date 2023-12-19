import { useSelector } from 'react-redux';
import GoodsList from './GoodsList';
import WatchSpinner from '../UI/WatchSpinner';

const GoodsWrapper = () => {
  const {status, error} = useSelector(state => state.goods);
  return (
    <>
        {status === 'loading' && <WatchSpinner />}
        {error && <h2 className='text-2xl font-bold'>Server Error!</h2>}
        {status === 'succeeded' &&
            <GoodsList />
        }
    </>
  )
}

export default GoodsWrapper