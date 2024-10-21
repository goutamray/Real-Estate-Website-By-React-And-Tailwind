import { useEffect, useState } from "react";


 import avaterPhoto from "../assets/aaaa.jpg"; 
import { useNavigate } from "react-router-dom";
import { fetchUserDataFromApi, updateUserData } from "../../api/api";
import createToast from "../utilis/toastify";

const Profile = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    photo: "", 
    previewPhoto: "",
  });


  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  



    // Handle input change 
    const handleInputChange = (e) => {
      setInput((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
        // Keep the existing photo in the input state
      }));
    };

 // handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setInput((prevState) => ({
        ...prevState,
        photo: imageUrl, // Store the file object for uploading
        previewPhoto: imageUrl, // For image preview
      }));
    }
  };
  

  // user login check 
    useEffect(() => {
      window.scrollTo(0,0);
      const token = localStorage.getItem("token");
      if (token !== null && token !== undefined && token !== "") {
        setIsLogin(true);
      }else{
        navigate("/signIn"); 
      }
    }, [navigate]);



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


    //handle user update 
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
    
    
              // Update the user information in localStorage
              const updatedUser = {
                    ...user,
                    name: res.user?.name,
                    email: res.user?.email,
                    photo: res.user?.photo || input.previewPhoto, 
                  };
              
                // Store the updated user data in localStorage
                localStorage.setItem("user", JSON.stringify(updatedUser));
          })
      } else {
        setIsLoading(false);
        createToast("User or token not found", "error");
      }
    };
    
    
    
  return (
    <div className="my-8">
      <div className="container">
        <h2 className="text-3xl text-center font-semibold mb-5 "> Profile </h2>
        <div className="form-data w-[500px] mx-auto">
          <form  onSubmit={handleUserUpdate} className="text-center">
        
            <img 
               src={input.photo || avaterPhoto } 
               alt="photo" 
              className="h-24 w-24 object-cover rounded-full text-center mx-auto cursor-pointer mb-4"
            />
            <div className="flex flex-col justify-center items-center">
              <label className="bg-green-600 px-3 py-2 rounded-lg w-[120px] mx-auto text-white cursor-pointer" > Upload </label>
              <input    
               type="file"
               onChange={handleFileUpload} 
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
                {
                  loading ? <p className="uppercase"> Updating...</p> : "Update "
                }
              
              </button>
          </form>
          <div className="flex justify-between mt-5">
            <span className="text-red-700 font-medium cursor-pointer"> Delete account </span>
            <span className="text-red-700 font-medium cursor-pointer"> Sign out </span>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Profile
