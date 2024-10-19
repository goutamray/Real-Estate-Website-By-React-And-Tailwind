import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createNewUser } from "../../api/api"
import createToast from "../utilis/toastify"


const SignUp = () => {
   const [input, setInput] = useState({
    name : "",
    email : "",
    password : "",
   })
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate(); 

   // handle change input 
  const handleInputChange = (e) => {
    setInput(() => ({
      ...input, 
      [e.target.name] : e.target.value
    }))
  }


  // handle form submit
  const handleFormSubmit = async(e) => {
    e.preventDefault() ;

    // Set loading to true at the beginning
    setLoading(true);

    try {
      // Create user
      createNewUser("/", input)
        .then((res) => {
          setLoading(false); 
          createToast("User Register Successful", "success");
          
          // Redirect to login page after successful registration
          setTimeout(() => {
            navigate("/sign-in");
          }, 2000);
          
          // Clear input fields
          setInput({
            name: "",
            email: "",
            password: "",
          });
        })
        .catch((error) => {
          setLoading(false);
    
          // Assuming the backend returns different error codes or messages for email and phone number conflicts
          if (error.response) {
            const status = error.response.status;
            const errorMessage = error.response.data.message;
    
            if (status === 400) {
              if (errorMessage.includes("Email")) {
                // Email already exists
                createToast("Email already exists. Please use a different email.", "error");
              } 
            } else {
              // Other errors
              createToast("Registration failed. Please try again.", "error");
            }
          } 
    
          console.error("Error during registration:", error);
        });
      } catch (error) {
        setLoading(false);
        console.error("Unexpected error:", error);
        createToast("An unexpected error occurred. Please try again.", "error");
      }


   }
  
   
  return (
    <div className="py-12 ">
       <div className="container">
         <h2 className="text-center text-gray-700 font-semibold text-3xl"> Sign Up </h2>
         <div className="sign-up-form w-[500px] mx-auto py-12">
           <form className="flex flex-col gap-4" onSubmit={handleFormSubmit} >
              <input 
                 type="text" 
                 placeholder="Username" 
                 className="border p-3 rounded-lg"
                 name="name"
                 value={input.name}
                 onChange={handleInputChange}
                />
              <input 
                 type="text" 
                 placeholder="Email" 
                 className="border p-3 rounded-lg"
                 name="email"
                 value={input.email}
                 onChange={handleInputChange}
                />
              <input 
                 type="text" 
                 placeholder="Password" 
                 className="border p-3 rounded-lg"
                 name="password"
                 value={input.password}
                 onChange={handleInputChange}
                />
              <button type="submit" className="p-3 bg-slate-700 text-center text-white font-medium rounded-lg uppercase hover:opacity-90">    
                                {
                                  loading === true ?   
                                  <p className="uppercase"> Loading...</p> : 
                                  "Sign Up"
                                }

              </button>
           </form>
           <div className="flex gap-2 mt-5 justify-center text-md font-medium">
              <p> Have an Account</p>
              <Link to="/sign-in" className="text-blue-700"> Sign In </Link>
           </div>
         </div>
       </div>
    </div>
  )
}

export default SignUp
