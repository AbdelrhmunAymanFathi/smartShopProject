import React from 'react'
import Navbar from '../shared/Navbar'
import Header from '../LatestProductsComponents/Header'
import "../LatestProductsScss/Header.scss"
import SimilerProducts from '../LatestProductsComponents/SimilerProducts'
import "../LatestProductsScss/SimilerProd.scss"
import Footer from "../shared/Footer"
import FilterProd from "../LatestProductsComponents/FilterProd"
import "../LatestProductsScss/FilterProd.scss"











const LatestProducts = () => {


  return (
    <div>
    <Navbar />
    <Header />
    <FilterProd/>
    <SimilerProducts />
    <Footer />
  
    </div>
  )
}

export default LatestProducts