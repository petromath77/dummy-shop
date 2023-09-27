import { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../features/DetailSlice';

const Detail = () => {
    let params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchDetail(params.id));
    }, [dispatch, params.id])

    const product = useSelector(state => state.detail.product);
    
    console.log(product);

  return (
    <section className="w-full mx-auto max-w-5xl px-4 py-12">
        <div className="text-left">
            <NavLink className='font-bold underline hover:no-underline' to={'/'}>Back To Products</NavLink>
        </div>
        <div className="flex mt-8">
            <div className="w-1/2">
                <img src={product.image} alt="" />
            </div>
            <div className="w-1/2 px-8">
                <div className="py-8 px-4 bg-slate-300 rounded-xl">
                    <h3 className="font-bold text-3xl mb-4">{product.title}</h3>
                    <p className="text-lg italic mb-4">{product.description}</p>
                    <div className="font-bold text-lg italic mb-4">Cost: {product.price}$</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Detail