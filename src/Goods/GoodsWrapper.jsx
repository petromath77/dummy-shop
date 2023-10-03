import React from 'react'
import GoodsList from './GoodsList';
import { Watch } from  'react-loader-spinner';

const GoodsWrapper = ({goods, status, error}) => {
  return (
    <>
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
            <GoodsList goods={goods} />
        }
    </>
  )
}

export default GoodsWrapper