
import Elipse1 from './Ellipse 1.png'
import Elipse2 from './Ellipse 2.png'
import Elipse3 from './Ellipse 3.png'
import Elipse4 from '../imgs/Rectangle 3677(2).png'
import Ellipse5 from '../imgs/2-removebg-preview (1) 1.png'
// Import Swiper styles



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <section className='sliders'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div className='sliderN1'>
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
          </SwiperSlide>
        <SwiperSlide><div className='sliderN1'>
        <div className='sliderUno'>
        <img src={Elipse3} alt="Logo" className='Elipse3'/>
        
        <div className='countaineer'>
        <img src={Elipse2} alt="Logo" className='Elipse2'/>
        <img src={Ellipse5} alt="Logo" className='Elipse4'/>
        </div>
        
        </div>
        <div className='textslider'>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <p className='pargraph'>احدث ادوات الجمال</p>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <button className='btnnum1'>اكتشف الان </button>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='sliderN1'>
        <div className='sliderUno'>
        <img src={Elipse3} alt="Logo" className='Elipse3'/>
        
        <div className='countaineer'>
        <img src={Elipse2} alt="Logo" className='Elipse2'/>
        <img src={Elipse4} alt="Logo" className='Elipse5'/>
        </div>
        
        </div>
        <div className='textslider'>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <p className='pargraph'>احدث ادوات الجمال</p>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <button className='btnnum1'>اكتشف الان </button>
        </div>
        </div></SwiperSlide>
        
      </Swiper>
      </section>
    </>
  );
}





