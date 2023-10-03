import GoodsCard from './GoodsCard';

const GoodsList = ({goods}) => {
  return (
    <>
        <div className='grid grid-cols-3 gap-6'>
            {goods.map((item) => 
                <GoodsCard key={item.id} {...item}/>
            )}
        </div>
    </>
  )
}

export default GoodsList