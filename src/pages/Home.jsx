
import slider from "../assets/slider-1.jpg"


import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <div>
      <div className=" slider">
      <Swiper 
         navigation={true}
         modules={[Navigation, Autoplay ]} 
         autoplay={{
          delay: 2000,
        }}
        loop={true} 
        className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider-photo">
              <img src={slider} alt="slider" className="h-[600px] w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-photo">
              <img src={slider} alt="slider" className="h-[600px] w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-photo">
              <img src={slider} alt="slider" className="h-[600px] w-full" />
            </div>
          </SwiperSlide>
       
      </Swiper>
         
      </div>
    </div>
  )
}

export default Home
