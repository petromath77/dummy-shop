import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../features/DetailSlice';
import { Watch } from  'react-loader-spinner'
import Section from '../UI/Section';
import { ImPriceTag } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import Button from '../UI/Button';
import { addCart } from '../features/CartSlice';

const Detail = () => {
    let params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {status, error} = useSelector(state => state.detail);

    useEffect(() => {
      dispatch(fetchDetail(params.id));
    }, [dispatch, params.id]);

    const product = useSelector(state => state.detail.product);

    const addProduct = (item) => {
      dispatch(addCart(item));
    }

  return (
    <Section>
        <div className="text-left">
            <button className='font-bold underline hover:no-underline' onClick={() => navigate(-1)}>Back To Products</button>
        </div>
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
        {error && <h2 className='mt-4 text-2xl font-bold'>Server Error!</h2>}
        {status === 'succeeded' &&
          <div className="flex flex-col md:flex-row mt-12">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img className="w-full h-96 object-contain" src={product.image} alt="" loading="lazy" />
            </div>
            <div className="w-full md:w-1/2 md:px-4">
                <div className="p-8 bg-slate-300 rounded-xl">
                    <h4 className="font-bold text-md mb-4 uppercase">{product.category}</h4>
                    <h3 className="font-bold text-2xl mb-4">{product.title}</h3>
                    <p className="text-lg italic mb-4">{product.description}</p>
                    <p className="flex justify-center items-center text-lg italic mb-4">Rating: {product.rating.rate} <AiFillStar style={star} className='ml-2'/></p>
                    <div className="flex justify-center gap-4">
                      <ImPriceTag style={icon}/>
                      <div className="font-bold text-lg italic mb-4">{product.price}$</div>
                    </div>
                    <Button type='button' className='px-4 py-2 mt-2' handler={() => addProduct(product)}>Add To Cart</Button>
                </div>
            </div>
        </div>
        }
    </Section>
  )
}

const icon = {color: "#475569", fontSize: '26px'};
const star = {color: "#475569", fontSize: '24px'};

export default Detail