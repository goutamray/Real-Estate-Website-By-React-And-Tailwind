
import { useEffect, useState } from "react";

import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getListingData } from "../../api/api";

const SinglePage = () => {
  const [listingData, setListingData] = useState({});

  const { id } = useParams();

 // get single listing 
  useEffect(() => {
    getListingData(`/${id}`).then((res) => {
      setListingData(res.listing)
    })
  }, [id]);
 

  return (
    <>
    <div className="pb-10"> 
      <div className="py-2">
        <img src={listingData?.photo} alt="photo" className="h-[600px] w-full " />
        <div className="container py-10 flex gap-12">
           <div className="price-box">
              <h2 className="text-xl font-bold"> <span className="text-green-500 text-xl"> $ </span>  {listingData?.discountPrice} </h2>
           </div>
           <div className="bed-room flex gap-3 items-center">
              <span className="text-green-500 text-xl"> <IoIosBed /> </span>
              <h2 className="text-xl font-semibold">  {listingData?.bedRoom}  Bedrooms </h2>
           </div>
           <div className="bath-room flex gap-3 items-center">
              <span className="text-green-500 text-xl"> <FaBath /> </span>
              <h2  className="text-xl font-semibold">  {listingData?.bathRoom}  Bathrooms </h2>
           </div>
           <div className="size flex gap-3 items-center">
              <span className="text-green-500 text-xl"> <FaVectorSquare /> </span>
              <h2 className="text-xl font-semibold"> {listingData?.size} Squares </h2>
           </div>
           <div className="buy-btn">
              <button> </button>
           </div>
        </div>
      </div>
      
      <div className="container pb-5 ">
          <div className="another-box bg-white p-10 rounded-lg">
              <div className="first-box flex justify-between  mb-3">
                <h2 className="text-3xl font-bold hover:text-blue-500"> {listingData?.name} </h2>
                <span className="bg-[#eab413] capitalize px-3 py-1 rounded-md text-white"> For {listingData?.type} </span>
              </div>
              <h3 className="text-md font-medium "> {listingData?.address} </h3>
          </div>
      </div>

      <div className="description mb-5">
        <div className="container">
          <h2 className="text-3xl font-bold "> Description </h2>
          <p> {listingData?.description} </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default SinglePage
















