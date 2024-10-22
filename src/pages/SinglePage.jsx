
import photoData from "../../src/assets/slider-1.jpg"; 
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa";

const SinglePage = () => {
  return (
    <>
      <div className="py-2">
        <img src={photoData} alt="photo" className="h-[500px] w-full " />
        <div className="container py-5 flex gap-10">
           <div className="price-box">
              <h2> $ 500000 </h2>
           </div>
           <div className="bed-room flex gap-3 items-center">
              <span> <FaBed /> </span>
              <h2> 5 Bedrooms </h2>
           </div>
           <div className="bath-room flex gap-3 items-center">
              <span> <FaBath /> </span>
              <h2> 2 Bathrooms </h2>
           </div>
           <div className="size flex gap-3 items-center">
              <span> <FaVectorSquare /> </span>
              <h2> 1200 Squares </h2>
           </div>
           <div className="buy-btn">
              <button> </button>
           </div>
        </div>
      </div>
      
      <div className="container py-5">
          <div className="another-box">
              <div className="first-box flex justify-between w-[600px] mb-3">
                <h2 className="text-2xl font-bold "> Wilshire Victoria </h2>
                <span className="bg-[#011b4e] px-3 py-1 rounded-md text-white"> For Sale </span>
              </div>
              <h3 className="text-md font-medium "> 10700 Wilshire Blvd, Los Angeles, CA 90024 </h3>
          </div>
      </div>

      <div className="description mb-5">
        <div className="container">
          <h2 className="text-3xl font-bold "> Description </h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima tenetur excepturi eaque dolor, sequi fugit perspiciatis nostrum earum cum, provident eum molestias minus at, cupiditate mollitia. Aliquid a error, temporibus perspiciatis numquam ipsam. Fuga eius distinctio ipsam earum non est molestias sed illo nemo voluptas amet, rem vitae ipsum! </p>
        </div>
      </div>

    </>
  )
}

export default SinglePage
















