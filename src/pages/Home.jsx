
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
import { useEffect, useState } from "react";
import { fetchListingDataFromApi } from "../../api/api";
import ListingBox from "../components/ListingBox";

const Home = () => {

  const [listingDataList, setListingDataList] = useState([]);

  console.log(listingDataList);
  

  useEffect(() => {
    fetchListingDataFromApi("/").then((res) => {
      setListingDataList(res.listing); 
    })
    
  }, []);


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
         <h2 className="text-3xl font-bold text-gray-600 mb-3"> Recent Real Estate </h2>
         <div className="listing-data py-5 flex flex-row gap-10 flex-wrap">

          {
            listingDataList?.length !== 0 && 
            listingDataList?.map((item, index) => {
                return <ListingBox key={index} item={item}/>
            })
          }

         </div>
       </div>
    </div>
    </>
  )
}

export default Home
