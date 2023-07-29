import React from 'react'
import Navbar from '../shared/Navbar'
import NextOfNav from '../AboutUsComponent/NextOfNav'
import "../AboutUsStyle/NextOfNav.scss"
import AsideAbout from '../AboutUsComponent/AsideAbout'
import "../AboutUsStyle/AsideAbout.scss"
import SimilerProd from "../LatestProductsComponents/SimilerProducts"
import Footer from '../shared/Footer'
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <NextOfNav />
      <AsideAbout />
      <SimilerProd />
      <Footer />
    </div>
  )
}

export default AboutUs
