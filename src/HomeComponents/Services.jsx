import React from 'react'
import icona from "../imgs/Group 8955(1).svg"
import { AiOutlineGift} from "react-icons/ai";
import { LuWallet} from "react-icons/lu";
import { TbDeviceMobile} from "react-icons/tb";
import { CiDeliveryTruck} from "react-icons/ci";

const Services = () => {
  return (
    <section className='contianerServices'>
   <div className='services'>
   
   <div>
   <h1 className='h'><b>عروض حصرية</b></h1>
   <p className='p'>خصومات كبيرة علي منتجاتنا</p>
   </div>

   <div className='icono'><AiOutlineGift /></div>
   </div>

   <div className='services'>
   
   <div>
   <h1 className='h'><b>استرجاع الاموال</b></h1>
   <p className='p'>استرداد امن لأموالك</p>
   </div>

   <div className='icono'><LuWallet /></div>
   </div>

   <div className='services'>
   
   <div>
   <h1 className='h'><b> دعم فني</b></h1>
   <p className='p'>دعم علي مدار الساعه</p>
   </div>

   <div className='icono'><TbDeviceMobile /></div>
   </div>

   <div className='services'>
  
   <div>
   <h1 className='h'><b>توصيل مجاني</b></h1>
   <p className='p'>للطلبات اعلي من 200 جنية</p>
   </div>

   <div className='icono'><img src={icona} alt='icon'/></div>
   </div>

    </section>
  )
}

export default Services