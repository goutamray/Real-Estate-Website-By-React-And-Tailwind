import { useEffect, useState } from "react"
import { deleteListingData, fetchListingDataFromApi } from "../../api/api";
import createToast from "../utilis/toastify";
import { useNavigate } from "react-router-dom";


const Listing = () => {
   const [listingData, setListingData ] = useState([]);
   const [isLogin, setIsLogin] = useState(false);
   
   const navigate = useNavigate();
  
   useEffect(() => {
      fetchListingDataFromApi("/").then((res) => {
        setListingData(res.listing)
      });
   }, []);

    // check login 
    useEffect(() => {
      window.scrollTo(0,0);
      const token = localStorage.getItem("token");
      if (token !== null && token !== undefined && token !== "") {
        setIsLogin(true);
      }else{
        navigate("/sign-in"); 
      }
    }, []);



   // delete listing 
   const handleDelete = (id) => {
       try {
        deleteListingData(`/${id}`).then((res) => {
          console.log(res);
        });
        createToast("Lising Deleted SuccessFul", "success"); 
       } catch (error) {
         console.log(error.message);
       }

      // refresh 
      fetchListingDataFromApi("/").then((res) => {
        setListingData(res.listing)
      });
   }


  return (
    <div className="py-12">
       <div className="container  ">
        <table className="table"> 
           <thead>
             <tr className="w-[600px]">
              <td className="font-bold text-xl"> Photo </td>
              <td className="pl-10 font-bold text-xl"> Title </td>
              <td className="pl-10 font-bold text-xl"> Action </td>
             </tr>
           </thead>
           <tbody className="mt-5">
            {
              listingData?.length !== 0 ?
              listingData?.map((item, index) => {
                return  <tr key={index}>
                <td>
                   <div className="photo my-2">
                       <img src={item?.photo[0]} className="h-20 w-20 rounded-lg " />
                   </div>
                </td>
                <td className="pl-10">
                    <div className="listing-data">
                       <h2> {item?.name} </h2>
                    </div>
                </td>
                <td className="pl-10">
                 <div className="flex gap-4 ">
                    <button className="bg-green-700 text-center text-white  px-3 py-2 rounded-lg h-10"> Edit </button>
                    <button className="bg-red-700 text-center text-white  px-3 py-2 rounded-lg h-10" onClick={() => handleDelete(item._id)}> Delete </button>
                  </div>
                </td>
             </tr>
              }) : <p className="text-center text-md"> No Listing Found </p>
            }

           </tbody>
        </table>
       </div>
    </div>
  )
}

export default Listing
















