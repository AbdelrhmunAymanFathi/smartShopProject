import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import LatestProducts from './pages/LatestProducts';
import AboutUs from './pages/AboutUs';
import Serv from './pages/Serv';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
const Routs = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/LatestProduct' element={<LatestProducts />} />
          <Route path='/services' element={<Serv />} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/SignUP' element={<SignUp />} />
          
        </Routes>
      </Router>

      <ToastContainer />
    </>
  )
}

export default Routs