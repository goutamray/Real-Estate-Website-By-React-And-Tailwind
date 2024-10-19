import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createNewUser } from "../../api/api";
import createToast from "../utilis/toastify";

const SignIn = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // handle change input
  const handleInputChange = (e) => {
    setInput(() => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  // handle form submit
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Validate all inputs 
    if (!input.email || !input.password) {
      setLoading(false);
      createToast("All fields are required", "error");
      return;
    }
  
    // Call login API
    createNewUser("/login", input)
      .then((res) => {
        createToast("User Login Successful", "success");
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || "Login failed. Please try again.";
        
        if (errorMessage.includes("Email")) {
          createToast("Invalid Email. Please check your email.", "error");
        } else if (errorMessage.includes("password")) {
          createToast("Incorrect password. Please try again.", "error");
        } else {
          createToast(errorMessage, "error");
        }
      })
      .finally(() => {
        setLoading(false);
        setInput({
          email: "",
          password: "",
          isAdmin: false,
        });
      });
  };


  return (
    <div className="py-12 ">
      <div className="container">
        <h2 className="text-center text-gray-700 font-semibold text-3xl">
          {" "}
          Sign In{" "}
        </h2>
        <div className="sign-up-form w-[500px] mx-auto py-12">
          <form className="flex flex-col gap-4" onSubmit={handleLoginFormSubmit}>
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
            <button
              type="submit"
              className="p-3 bg-slate-700 text-center text-white font-medium rounded-lg uppercase hover:opacity-90"
            >
              {loading === true ? (
                <p className="uppercase"> Loading...</p>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          <div className="flex gap-2 mt-5 justify-center text-md font-medium">
            <p> Dont have an Account</p>
            <Link to="/sign-up" className="text-blue-700">
              {" "}
              Sign Up{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
