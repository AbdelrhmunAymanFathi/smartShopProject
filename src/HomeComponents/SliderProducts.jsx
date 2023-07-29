import React from 'react';


import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import imgprod1 from '../imgs/Rectangle 3677.png'
import imgprod2 from '../imgs/Rectangle 3677(1).png'
import imgprod3 from '../imgs/Rectangle 3677(2).png'
import imgprod4 from '../imgs/Rectangle 3677(3).png'
import imgprod5 from '../imgs/Rectangle 3677(4).png'
import imgprod6 from '../imgs/Rectangle 3677(5).png'
import imgprod7 from '../imgs/Rectangle 3677(6).png'
import imgprod8 from '../imgs/Rectangle 3677(7).png'
// Import Swiper styles

import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";

import { RiStarSFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../HomeComScss/SliderProduct.scss"


// import required modules
import {  Navigation } from 'swiper/modules';

export default function App(){

  const [showLink1 , setShowLink1] = useState(false);
  const [showLink2 , setShowLink2] = useState(false);
  const [showLink3 , setShowLink3] = useState(false);
  const [showLink4 , setShowLink4] = useState(false);
  const [showLink5 , setShowLink5] = useState(false);
  const [showLink6 , setShowLink6] = useState(false);
  const [showLink7 , setShowLink7] = useState(false);
  const [showLink8 , setShowLink8] = useState(false);

    return(

      <>
      
      
        <section className='slide'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
        >

        <SwiperSlide>
        <section className='sliderBrand'>
        <section className='sliderB'>
        {/*brand1*/}
                <div className='br'>
                    <div>
                        <img src={imgprod6} alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand2*/}
        <div className='br'>
                    <div>
                        <img src={imgprod6} alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand3*/}
        <div className='br'>
                    <div>
                        <img src={imgprod7}  alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
                    </section>
                </section>

    </SwiperSlide>

        <SwiperSlide>
        <section className='sliderBrand'>
        <section className='sliderB'>
        {/*brand1*/}
                <div className='br'>
                    <div>
                        <img src={imgprod8} alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand2*/}
        <div className='br'>
                    <div>
                        <img src={imgprod5} alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand3*/}
        <div className='br'>
                    <div>
                        <img src={imgprod4}  alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
                    </section>
                    </section>
        </SwiperSlide>

        <SwiperSlide>
        <section className='sliderBrand'>
        <section className='sliderB'>
        {/*brand1*/}
                <div className='br'>
                    <div>
                        <img src={imgprod3} alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand2*/}
        <div className='br'>
                    <div>
                        <img src={imgprod2}  alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand3*/}
        <div className='br'>
                    <div>
                        <img src={imgprod1} alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
                    </section>
                    </section>
                    
        </SwiperSlide>

        <SwiperSlide>
        <section className='sliderBrand'>
        <section className='sliderB'>
        {/*brand1*/}
                <div className='br'>
                    <div>
                        <img src={imgprod6} alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand2*/}
        <div className='br'>
                    <div>
                        <img src={imgprod6}  alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
        {/*brand3*/}
        <div className='br'>
                    <div>
                        <img src={imgprod6} alt='pic1' />
                    </div>
                {/*link*/}
                    <div className='linkk'>
                        <button>أضف للعربة</button>
                    </div>
                {/*heart icon*/}
                    <div className='heartIconn'><MdFavorite/></div>
                {/*div1*/}
                    <div className='divv1'>
                        {/*price*/}
                        <div className='pricee'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='starss'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                {/*div2*/}
                    <div className='divv2'>
                        {/*price*/}
                        <div className='pricee'><span className='deco'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p3'>بلوزة قطنية بيضاء</p></div>
                    </div>
                {/*div3*/} {/*size*/}
                    <div className='sizee'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='aquaa'>XS</p>
                    </div>
                    </div>
                    </section>
                    </section>
        </SwiperSlide>
      
    </Swiper>

    <section className='menu'>
    <div className='h1'>
        <p>تسوق عبر الفئات</p>
    </div>
    <div className='menuLink'>
    <div className='inLink'><a href='#'>رجالي</a></div>
<div className='inLink'><a href='#'>حريمي </a> </div>
<div className='inLink'><a href='#'>اطفال</a></div>
<div className='inLink'><a href='#'>اكسسوارات</a></div>
<div className='inLinkBorder'><a href='#'>العاب</a></div>
</div>
    
</section>
    </section>
    </>

  )
}