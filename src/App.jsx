
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createContext, useEffect, useState } from 'react';

// components 
import Header from './components/Header';

// pages 
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import AddListing from './pages/AddListing';
import Listing from './pages/Listing';
import SinglePage from './pages/SinglePage';
import Footer from './components/Footer';

// context 
const MyContext = createContext();

function App() {

  const [isLogin, setIsLogin] = useState(false);  
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {
      name: "",
      email: "",
      userId: ""
    };
  });


      // login & logout 
      useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token) {
          setIsLogin(true); 
          const userData = JSON.parse(localStorage.getItem("user"));
          setUser(userData); 
        } else {
          setIsLogin(false); 
          setUser({
            name: "",
            email: "",
            userId: ""
          });
        }
      }, []);

  // send all data
  const values = {
    isLogin,
    setIsLogin,
    user,
    setUser
  }

  return (
    <>

     <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />



       <BrowserRouter>
       <MyContext.Provider value={values}>
         <Header />
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/about' element={ <About /> }/>
            <Route path='/sign-in' element={ <SignIn /> }/>
            <Route path='/sign-up' element={ <SignUp /> }/>
            <Route path='/profile' element={ <Profile /> }/>
            <Route path='/create-listing' element={ <AddListing /> }/>
            <Route path='/listing' element={ <Listing /> }/>
            <Route path='/listing/:id' element={ <SinglePage /> }/>
          
          </Routes>
          <Footer />
          </MyContext.Provider>
       </BrowserRouter>
    </>
  )
}

export default App


export { MyContext }; 
