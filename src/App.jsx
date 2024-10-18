
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components 
import Header from './components/Header';

// pages 
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';


function App() {

  return (
    <>
       <BrowserRouter>
         <Header />
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/about' element={ <About /> }/>
            <Route path='/sign-in' element={ <SignIn /> }/>
            <Route path='/sign-up' element={ <SignUp /> }/>
            <Route path='/profile' element={ <Profile /> }/>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App; 
