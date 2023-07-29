// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import brand1 from "../imgs/brandlogo5.png"
import brand2 from "../imgs/tablogo1.png"
import brand3 from "../imgs/brandlogo4.png"
import brand4 from "../imgs/brandlogo6.png"
import brand5 from "../imgs/brandlogo2.png"


// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
   <>
   
   <section className='textooo'>
    <h3 className='brando'>البرندات</h3>
   </section>


   <section className='brands'>
   
   <Swiper
     spaceBetween={5}
     slidesPerView={7}
     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
   >
     <SwiperSlide><img src={brand1} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand2} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand3} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand4} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand5} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand1} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand2} alt='brand'/></SwiperSlide>

     <SwiperSlide><img src={brand1} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand2} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand3} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand4} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand5} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand1} alt='brand'/></SwiperSlide>
     <SwiperSlide><img src={brand2} alt='brand'/></SwiperSlide>
  

   </Swiper>
   
   </section>
   </>
  );
};