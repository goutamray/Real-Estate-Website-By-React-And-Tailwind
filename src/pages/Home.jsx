
import slider from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";
import property1 from "../assets/g1.svg";
import property2 from "../assets/g2.svg";
import property3 from "../assets/g3.svg";
import property4 from "../assets/g4.svg";
import property5 from "../assets/g5.svg";



import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <>
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
              <img src={slider2} alt="slider" className="h-[600px] w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-photo">
              <img src={slider3} alt="slider" className="h-[600px] w-full" />
            </div>
          </SwiperSlide>
       
      </Swiper>
         
      </div>

      <div className="property py-10 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold "> Find Your Property </h2>
          <div className="all-data-property flex gap-4 justify-between py-10">

            <div className="single-property text-center">
               <img src={property1} alt="property" className="mx-auto" />
               <h2> Townhouses </h2>
               <p> (11)</p>
            </div>

            <div className="single-property text-center ">
               <img src={property2} alt="property" className="mx-auto"   />
               <h2> Apartments </h2>
               <p> (3)</p>
            </div>

            <div className="single-property text-center ">
               <img src={property3} alt="property" className="mx-auto" />
               <h2> Duplex </h2>
               <p> (15)</p>
            </div>

            <div className="single-property text-center ">
               <img src={property4} alt="property" className="mx-auto"  />
               <h2> Garages </h2>
               <p> (5)</p>
            </div>

            <div className="single-property text-center ">
               <img src={property5} alt="property" className="mx-auto"  />
               <h2> Houses </h2>
               <p> (13)</p>
            </div>

          </div>
        </div>
      </div>

    <div className="all-listing py-12">
       <div className="container">
         <h2 className="text-3xl font-bold text-gray-600 "> Recent Real Estate </h2>
         <div className="listing-data py-5 flex justify-between flex-wrap">

           <div className="single-listing shadow mb-8">
              <img src={slider} alt="listing" className="h-[300px] w-[400px] object-cover rounded-md"/>
              <div className="list-content px-5 py-4 ">
                <h2 className="text-2xl font-semibold"> Wilshire Victoria </h2>
                <p className="text-md py-1 "> 10700 Wilshire Blvd, Los Angeles, CA 90024 </p>
                <p className="font-bold text-md"> $10 000.00 </p>
                <div className="service flex gap-4 mt-3 justify-between border-t-2 pt-2">
                    <div className="bed">
                      <span> </span>
                      <span> 6 Rooms </span>
                    </div>
                    <div className="bed">
                      <span> </span>
                      <span> 3 Baths </span>
                    </div>
                    <div className="bed">
                      <span> </span>
                      <span> 1500sq </span>
                    </div>
               </div>
             </div>
           </div>

           <div className="single-listing shadow mb-8">
              <img src={slider} alt="listing" className="h-[300px] w-[400px] object-cover rounded-md"/>
              <div className="list-content px-5 py-4 ">
                <h2 className="text-2xl font-semibold"> Wilshire Victoria </h2>
                <p> 10700 Wilshire Blvd, Los Angeles, CA 90024 </p>
                <p> $10 000.00 </p>
                <div className="service flex gap-4">
                <div className="bed">
                  <span> </span>
                  <span> 6 Rooms </span>
                </div>
                <div className="bed">
                  <span> </span>
                  <span> 3 Baths </span>
                </div>
                <div className="bed">
                  <span> </span>
                  <span> 1500sq </span>
                </div>
               </div>
             </div>
           </div>

           <div className="single-listing shadow mb-8">
              <img src={slider} alt="listing" className="h-[300px] w-[400px] object-cover rounded-md"/>
              <div className="list-content px-5 py-4 ">
                <h2 className="text-2xl font-semibold"> Wilshire Victoria </h2>
                <p> 10700 Wilshire Blvd, Los Angeles, CA 90024 </p>
                <p> $10 000.00 </p>
                <div className="service flex gap-4">
                <div className="bed">
                  <span> </span>
                  <span> 6 Rooms </span>
                </div>
                <div className="bed">
                  <span> </span>
                  <span> 3 Baths </span>
                </div>
                <div className="bed">
                  <span> </span>
                  <span> 1500sq </span>
                </div>
               </div>
             </div>
           </div>

           <div className="single-listing shadow mb-8">
              <img src={slider} alt="listing" className="h-[300px] w-[400px] object-cover rounded-md"/>
              <div className="list-content px-5 py-4 ">
                <h2 className="text-2xl font-semibold"> Wilshire Victoria </h2>
                <p> 10700 Wilshire Blvd, Los Angeles, CA 90024 </p>
                <p> $10 000.00 </p>
                <div className="service flex gap-4">
                <div className="bed">
                  <span> </span>
                  <span> 6 Rooms </span>
                </div>
                <div className="bed">
                  <span> </span>
                  <span> 3 Baths </span>
                </div>
                <div className="bed">
                  <span> </span>
                  <span> 1500sq </span>
                </div>
               </div>
             </div>
           </div>

         </div>
       </div>
    </div>
    </>
  )
}

export default Home
