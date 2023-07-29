import React from 'react'
//import imageH from "../imgs/Untitled design (5).png"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <section className='header'>
            <div className='text4'>
            <h1> تسوق أحدث المنتجات العصرية </h1>
            <div className='t4'>
            <Link to='/LatestProduct' className='ko' > المنتجات </Link>
            <p> / </p>
            <Link to='/' className='ko'> الرئيسية </Link>
            </div>
            </div>
        </section>

  )
}

export default Header