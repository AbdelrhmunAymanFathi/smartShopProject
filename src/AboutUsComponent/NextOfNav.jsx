import React from 'react'

import { Link } from 'react-router-dom'
const NextOfNav = () => {
  return (
      <section className='header'>
            <div className='text4'>
            <h1> تسوق أحدث المنتجات العصرية </h1>
            <div className='t4'>
            <Link to='/aboutus' className='ko' > السلة </Link>
            <p> / </p>
            <Link to='/' className='ko'> الرئيسية </Link>
            </div>
            </div>
        </section>
  )
}

export default NextOfNav
