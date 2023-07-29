import React from 'react'

import Elipse1 from './Ellipse 1.png'
import Elipse2 from './Ellipse 2.png'
import Elipse3 from './Ellipse 3.png'

const Slider = () => {
  return (
    <div className='sliderN1'>
    <div className='sliderUno'>
    <img src={Elipse3} alt="Logo" className='Elipse3'/>
    
    <div className='countaineer'>
    <img src={Elipse2} alt="Logo" className='Elipse2'/>
    <img src={Elipse1} alt="Logo" className='Elipse1'/>
    </div>
    
    </div>
    <div className='textslider'>
    <p className='pargraph2'>براندات نسائي عالمية</p>
    <p className='pargraph'>احدث ادوات الجمال</p>
    <p className='pargraph2'>براندات نسائي عالمية</p>
    <button className='btnnum1'>اكتشف الان </button>
    </div>
    </div>
  
  )
}

export default Slider