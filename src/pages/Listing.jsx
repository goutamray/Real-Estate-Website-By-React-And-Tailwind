import { useState } from "react";
import { createListingData } from "../../api/api";
import createToast from "../utilis/toastify";
import { useNavigate } from "react-router-dom";


const Listing = () => {
  const [input, setInput ] = useState({
    name : "",
    description : "",
    address : "",
    regularPrice : null,
    discountPrice : null,
    bedRoom : null,
    bathRoom : null,
    furnished : false,
    parking : false,
    type : "",
    offer : null,
    photo : [],
    userRef : ""
  }); 
  const [file, setFile ] = useState([]); 
  const [loading, setLoading ] = useState(false); 
  const [userIdData, setUserIdData] = useState("")
  
  const navigate = useNavigate(); 

    // handle input change 
    const handleInputChange = (e) => {
      setInput((prevState) => ({
        ...prevState, 
        [e.target.name] : e.target.value
       }))
    }; 

   // Handle file input change
   const handleFileChange = (e) => {
    setFile((prevState) => ([
      ...prevState,
      ...Array.from(e.target.files),
    ]));
  };

  // photo delete 
  const handlePhotoDelete = (item) => {
    setFile(file.filter(data => data !== item))
  }; 
  

  // handle form submit 
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    setLoading(true); 

    const user = JSON.parse(localStorage.getItem("user"));
    setUserIdData(user?.userId); 
   

    const formData = new FormData();
    formData.append('name', input.name);
    formData.append('description', input.description);
    formData.append('address', input.address);
    formData.append('regularPrice', input.regularPrice);
    formData.append('discountPrice', input.discountPrice);
    formData.append('bedRoom', input.bedRoom);
    formData.append('bathRoom', input.bathRoom);
    formData.append('furnished', input.furnished);
    formData.append('parking', input.parking);
    formData.append('type', input.type);
    formData.append('offer', input.offer);
    formData.append('userRef', userIdData);



  // file manage
  file.forEach((f) => {
    formData.append('photo', f);
  });

      // validate data 
      if( 
        !input.name || 
        !input.description || 
        !input.address || 
        !input.regularPrice ||
        !input.discountPrice ||
        !input.bedRoom || 
        !input.bathRoom || 
        !input.type 
       ){
          setLoading(false); 
          createToast("All fields are required");
          return;
      }

  try {
    createListingData("/create", formData).then((res) => {
      setLoading(false); 
      createToast("Product Created Successfull", "success"); 
 
      navigate(`/listing/${user?.userId}`)

      // reset data 
      setInput({
        name : "",
        description : "",
        address : "",
        regularPrice : null,
        discountPrice : null,
        bedRoom : null,
        bathRoom : null,
        furnished : false,
        parking : false,
        type : "",
        offer : null,
        photo : [],
      });
      e.target.reset(); 
      
    })


  } catch (error) {
    console.log(error.message);
    
  }
    
  }

  return (
    <div className="container">
      <h2 className="text-3xl font-semibold text-center my-7"> Create a Listing</h2>
      <div className="my-listing-form flex flex-col sm:flex-row gap-2 ">
         <div >
            <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row ">
              <div className="flex flex-col gap-2  w-[320px] sm:w-[600px]">
                  <input
                      type="text"
                      placeholder="Name"
                      className="border p-3 rounded-lg w-full "
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                    />
                  <textarea
                      type="text"
                      placeholder="Description"
                      className="border p-3 rounded-lg w-full "
                      name="description"
                      value={input.description}
                      onChange={handleInputChange}
                    />
                  <input
                      type="text"
                      placeholder="Address"
                      className="border p-3 rounded-lg w-full "
                      name="address"
                      value={input.address}
                      onChange={handleInputChange}
                    />
                  <div className="flex flex-col sm:flex-row gap-4 mt-2"> 
                    <div className="">
                        <h2 className="font-medium mb-2"> Property Type </h2>
                        <select 
                           name="type"
                           value={input.type}
                           onChange={handleInputChange} 
                           className=" p-2 rounded-lg" 
                          >
                          <option value="" >Select Your Property </option>
                          <option value="sell"> Sell </option>
                          <option value="rent"> Rent </option>
                        </select>
                      </div>
                      <div >
                      <h2 className="mb-2 font-medium "> Parking </h2>
                      <select 
                         name="parking"
                         value={input.parking}
                         onChange={handleInputChange} 
                         className=" p-2 rounded-lg"
                        >
                        <option value="" > Select Your Parking </option>
                        <option value="true"> True </option>
                        <option value="false"> False </option>
                      </select>
                  </div>
                  <div>
                      <h2 className="mb-2 font-medium"> Furnished </h2>
                      <select 
                         name="furnished"
                         value={input.furnished}
                         onChange={handleInputChange} 
                         className="p-2 rounded-lg"
                      >
                        <option value="" > Select Your Furnished</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                  </div> 
                  </div>  

                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <div className="">
                      <h2 className="mb-2 font-medium"> BedRoom </h2>
                      <input 
                          type="number"
                          name="bedRoom"
                          value={input.bedRoom}
                          onChange={handleInputChange} 
                          className="border border-gray-400 border-1 p-1 rounded-lg"
                        />
                    </div>
                    <div className="">
                      <h2 className="mb-2 font-medium"> BathRoom </h2>
                      <input 
                          type="number" 
                          name="bathRoom"
                          value={input.bathRoom}
                          onChange={handleInputChange}
                          className="border border-gray-400 border-1 p-1 rounded-lg"  
                        />
                    </div>
                    <div className="">
                        <h2 className="font-medium mb-2"> Offer </h2>
                        <input 
                           type="text"
                           name="offer"
                           value={input.offer}
                           onChange={handleInputChange} 
                           className="border border-1 border-gray-400 p-1 rounded-lg"
                          />
                      </div>
                  </div>

                  <div className="price flex flex-col sm:flex-row gap-2">
                    <div className="reg-price">
                      <h2 className="mb-2 font-medium "> Regular Price  </h2>
                      <input 
                         type="text"
                         name="regularPrice"
                         value={input.regularPrice}
                         onChange={handleInputChange} 
                         className="border border-1 border-gray-400 p-1 rounded-lg"
                        />
                    </div>
                    <div className="sale-price">
                      <h2 className="mb-2 font-medium "> Sale Price  </h2>
                      <input 
                         type="text"
                         name="discountPrice"
                         value={input.discountPrice}
                         onChange={handleInputChange} 
                         className="border border-1 border-gray-400 p-1 rounded-lg"
                        />
                    </div>
                  </div>
              </div>

             <div className="main flex flex-col pl-0 sm:pl-10 "> 
            <div className="description pl-0 mt-5 sm:mt-0 sm:pl-5">
              <div className="photo"> 
                  <p className="same-title font-semibold text-2xl mb-2"> Listing Photo </p>
                  <input 
                        type="file" 
                        multiple
                        className="form-control mt-1 custom-class-add" 
                        name="photo"   
                        onChange={handleFileChange} 
                      />
                </div>

                <button className="px-3 py-2 w-full mt-5 rounded-lg bg-green-700 text-center text-white">
                  {
                    loading ? <p> Creating....</p> : "Create"
                  }
                  </button>
              </div>
              <div className="photo-box  flex flex-wrap sm:flex-row gap-4 mt-8 pl-5">
                  {
                    file?.length > 0 ?
                      file?.map((item, index) => {
                        const imageurl = URL.createObjectURL(item);

                        return  <div className="single-photo  h-28 w-28 align-middle " key={index}>
                        <img src={imageurl} alt="photo" className="h-28 w-28 rounded-md border border-1 border-green-700" />
                        <button onClick={() => handlePhotoDelete(item)} className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium  mt-2"> Delete </button>
                    </div>
                      }) : ""
                    
                  }
                  
                </div>
              </div>  
            </form>
          </div>
      </div>

    </div>
  )
}

export default Listing









