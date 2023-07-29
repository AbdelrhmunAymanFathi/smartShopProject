import React from 'react'
import c1 from "../imgs/c1.png"
import c3 from "../imgs/c3.png"

const TimerOffer = () => {
  return (
    <section className='timer'>
    {/*text*/}
    <div className='text2'>
        {/*photos*/}
        <div className='photos'>
                <div className='boys'> <img src={c1} alt='boy'/> </div>
                <div className='girls'> <img src={c3} alt='girl'/> </div>
            </div>
            <div className='text3'>
            <h3>اكبر خصم علي الاطلاق</h3>
            <p className='p2'>احدث ملابس الاطفال</p>
            
            <div className='time1'>
                <p className='num2'>00</p>
                <p className='num1'>00</p>
                <p className='num1'>00</p>
                <p className='num1'>00</p>
            </div>
            <div className='time2'>
                <p className='num2'>ثانية</p>
                <p className='num1'>دقيقة</p>
                <p className='num1'>ساعة</p>
                <p className='num1'>يوم</p>
            </div>
            <div className='link1'>
                <button>تسوق الان</button>
            </div>
            </div>
        </div>
    
    </section>
  )
}

export default TimerOffer