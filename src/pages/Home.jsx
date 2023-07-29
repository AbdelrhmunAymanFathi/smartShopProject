import React from 'react'
import Navbar from '../shared/Navbar'
//import Slider from '../components/SliderN1'
import SliderBrand from '../HomeComponents/SliderBrand'
import Services from '../HomeComponents/Services'
import "../HomeComScss/Services.scss"
import Offers from '../HomeComponents/Offers'
import "../HomeComScss/Offers.scss"
import "../HomeComScss/Slider.scss"
import Prod from '../HomeComponents/Prod'
import "../HomeComScss/Prod.scss"
import TimerOffer from '../HomeComponents/TimerOffer'
import "../HomeComScss/TimerOffer.scss"
import SliderProducts from '../HomeComponents/SliderProducts';
import "../HomeComScss/SliderProduct.scss"
import Brands from '../HomeComponents/Brands'
import  "../HomeComScss/Brands.scss"
import Aside from "../HomeComponents/Aside"
import "../HomeComScss/Aside.scss"
import Footer from "../shared/Footer"

const Home = () => {
  return (
    <>
    <Navbar />
  <SliderBrand />
  <Services />
  <Offers />
  <Prod/>
  <TimerOffer/>
  <SliderProducts/>
  <Brands/>
  <Aside />
  <Footer/>

    </>
  )
}


export default Home;