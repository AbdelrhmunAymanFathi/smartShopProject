import React from 'react'
import Navbar from '../shared/Navbar'
import Head from '../ServComponents/Head'
import ProductDetails from '../ServComponents/ProductDetails'
import SimilerProduct from "../LatestProductsComponents/SimilerProducts"
import Footer from "../shared/Footer"
import RateComments from '../ServComponents/RateComments'
const Serv = () => {
  return (
    <div>
    <Navbar />
    <Head />
    <ProductDetails/>
    <RateComments />
    <SimilerProduct />
    <Footer />
    </div>
  )
}

export default Serv