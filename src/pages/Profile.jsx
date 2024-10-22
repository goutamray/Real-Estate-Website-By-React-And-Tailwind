

import { useEffect, useState } from "react";
import avaterPhoto from "../assets/aaaa.jpg"
import { Link, useNavigate } from "react-router-dom";
import { fetchUserDataFromApi, updateUserData } from "../../api/api";
import createToast from "../utilis/toastify";

const Profile = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    photo: "", 
    previewPhoto: "",
  });
  const navigate = useNavigate();

  // Handle input change 
  const handleInputChange = (e) => {
      setInput((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
      }));
    };

    // Handle file input change and set preview
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setInput((prevState) => ({
          ...prevState,
          photo: file, // Store the file object for uploading
          previewPhoto: imageUrl, // For image preview
        }));
      }
    };


    useEffect(() => {
      window.scrollTo(0,0);
      const token = localStorage.getItem("token");
      if (token !== null && token !== undefined && token !== "") {
        setIsLogin(true);
      }else{
        navigate("/sign-in"); 
      }
    }, []);
  
  
    // get single data in logged in user 
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
  
      if (user && user?.userId) {
        fetchUserDataFromApi(`/${user?.userId}`).then((res) => {
          if (res) {
            setUserData(res); 
  
            // Ensure response has required fields before setting input state
            setInput({
              name: res.user?.name || "",
              email: res.user?.email || "",
            
              photo: res.user?.photo || "", // Ensure you are using the URL returned from API
              previewPhoto: res.user?.photo || avaterPhoto, // Default to avatar photo if no photo is available
            });
          }
        });
      } else {
        console.error("User not found in localStorage");
      }
    }, []);
    

  // handle user update 
  const handleUserUpdate = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!input.name || !input.email ) {
      setIsLoading(false);
      createToast("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append('name', input.name);
    formData.append('email', input.email);
    if (input.photo) {
      formData.append('photo', input.photo);
    }

    // Get token and user data
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));


    if (user?.userId && token) {
      updateUserData(`/${user?.userId}`, formData)
        .then((res) => {
          setIsLoading(false);
          createToast("User updated successfully!", "success");

          // console.log(res);
          

            // Update the user information in localStorage
              const updatedUser = {
                ...user,
                name: res.user?.name,
                email: res.user?.email,
                photo: res.user?.photo || input.previewPhoto, // Use the updated photo URL or the preview photo
              };
          
            // Store the updated user data in localStorage
            localStorage.setItem("user", JSON.stringify(updatedUser));
        })
    } else {
      setIsLoading(false);
      createToast("User or token not found", "error");
    }
  };


  //user logout 
  const handleLogout = () => {
    localStorage.clear();

    setTimeout(() => {
        navigate("/sign-in");
        createToast("User Logout Successful", "success");
    }, 2000);
 }; 
    
  return (
    <div className="my-8">
      <div className="container">
        <h2 className="text-3xl text-center font-semibold mb-5 "> Profile </h2>
        <div className="form-data w-[500px] mx-auto">
          <form onSubmit={handleUserUpdate} className="text-center">
        
            <img 
               src={input.previewPhoto || avaterPhoto}
               alt="photo" 
               onChange={handleFileChange}
               className="h-24 w-24 object-cover border border-1 border-gray-400 rounded-full text-center mx-auto cursor-pointer mb-4"
            />
            <div className="flex flex-col justify-center items-center">
              <label className="bg-green-600 px-3 py-2 rounded-lg w-[120px] mx-auto text-white cursor-pointer" > Upload </label>
              <input    
               type="file"
               onChange={handleFileChange} 
               className="relative -top-9 w-[120px] h-8 opacity-0 cursor-pointer "
              />
            </div>
          
           
            <input
                type="text"
                placeholder="Name"
                className="border p-3 rounded-lg w-full my-2"
                name="name"
                value={input.name}
                onChange={handleInputChange}
              />
            <input
                type="text"
                placeholder="Email"
                className="border p-3 rounded-lg w-full my-2"
                name="email"
                value={input.email}
                onChange={handleInputChange}
              />
            <button
                type="submit"
                className="p-3 bg-slate-700 text-center text-white font-medium rounded-lg uppercase hover:opacity-90 w-full"
              >
                update
              </button>
          </form>
          <div className="mt-4">
            <button className="w-full uppercase text-md bg-green-700 p-3 text-white rounded-lg font-medium"> 
                <Link to="/create-listing"> Create Listing </Link>
            </button>
          </div>
          <div className=" mt-5">
            <button  onClick={handleLogout}  className="text-white rounded-lg bg-red-700 px-3 py-2 text-xl font-medium cursor-pointer"> Sign out </button>
          </div>

        </div>
      
      </div>
    </div>
  )
}

export default Profile
