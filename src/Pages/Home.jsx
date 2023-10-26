import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import Overlay from '../UI/Overlay';

const Home = () => {
  const images = ['1','2','3','4'];

  return (
    <>
      <div className='relative h-h-banner'>
        <Overlay />
        <Swiper className='w-full h-full'
          spaceBetween={30}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {
            images.map(image =>
              <SwiperSlide className='w-full h-full' key={image}>
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + `/images/slide${image}.jpg`} alt="" loading="lazy"/>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </>
  )
}

export default Home