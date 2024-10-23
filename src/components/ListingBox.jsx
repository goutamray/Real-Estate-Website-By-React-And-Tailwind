import { Link } from "react-router-dom"
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa";


const ListingBox = ({ item }) => {
  return (
    <>
      <div className="single-listing shadow mb-3 w-[420px] relative" >
        <Link to={`/listing/${item?._id}`}> 
                <img src={item?.photo} alt="listing" className="h-[300px] w-[420px] object-cover rounded-md"/>
                <span className="bg-red-600 text-white capitalize text-md font-medium px-3 py-1 rounded-md absolute top-4 right-3"> {item?.type} </span>
                <div className="list-content px-5 py-4 ">
                  <h2 className="text-2xl font-semibold hover:text-blue-500 transition-all"> {item?.name} </h2>
                  <p className="text-md py-1 "> {item?.address}  </p>
                  <p className="font-bold text-md"> $ {item?.discountPrice} </p>
                  <div className="service flex gap-4 mt-3 justify-between border-t-2 pt-2">
                      <div className="bed flex gap-2 items-center">
                        <span className="text-green-500 text-xl">  
                          <IoIosBed /> 
                        </span>
                        <span className="font-semibold"> 
                          {item?.bedRoom} Rooms 
                        </span>
                      </div>
                      <div className="bed flex gap-2 items-center">
                        <span className="text-green-500 text-xl">  
                          <FaBath /> 
                        </span>
                        <span className="font-semibold">  
                          {item?.bathRoom} Baths 
                        </span>
                      </div>
                      {
                        item?.size?.length > 0 &&  <div className="bed flex gap-2 items-center ">
                        <span className="text-green-500 text-xl"> 
                          <FaVectorSquare />  
                        </span>
                        <span className="font-semibold"> 
                          {item?.size} sq 
                        </span>
                      </div>
                      }
                     
                 </div>
              </div>
          </Link>
      </div>
    </>
  )
}

export default ListingBox










