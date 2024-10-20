
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

import avater from "../assets/aaaa.jpg";

const Header = () => {

  const { currentUser } = useSelector((state) => state.user);
  
  return (
    <div className="py-2 shadow-md bg-slate-200 ">
      <div className="container flex justify-between items-center ">
        <div>
            <img src={logo} alt="logo" className="w-20 sm:w-full"/>
        </div>
        <div>
          <form className="bg-slate-100 p-2 sm:p-3 rounded-lg flex justify-between items-center">
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-72"/>
            <FaSearch className="text-slate-600"/>
          </form>
        </div>
      <div >
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700"> <Link to="/"> Home </Link></li>
          <li className="hidden sm:inline text-slate-700"> <Link to="/about"> About </Link></li>
          <li className=" text-slate-700 "> 
          {currentUser?.photo ? (
              <div>
                <Link to="/profile">
                  <img
                     src={currentUser?.photo || avater }
                    alt="profile"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                </Link>
              </div>
            ) : (
              <Link
                to="/sign-in"
                className="bg-[#1db2ff] px-2 sm:px-4 py-2 rounded-md text-white font-medium"
              >
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Header

