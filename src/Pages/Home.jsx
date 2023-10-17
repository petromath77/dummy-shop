// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';

const Home = () => {
  const images = ['1','2','3','4'];

  return (
    <>
      <div className='h-150'>
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
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + `/images/slide${image}.jpg`} alt="" />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </>
  )
}

export default Home