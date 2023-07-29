import React , {useState} from 'react'

import { Link } from 'react-router-dom'
import image from "../imgs/Rectangle 3706(1).png"
import iconSmart from "../imgs/smartPic.svg"
import iconShop from "../imgs/shopPic.png"
import person from "../imgs/iconPerson.svg"
import Email from "../imgs/ic_outline-email.svg"
import pass from "../imgs/iconPassword.svg"
import linkedin from "../imgs/linkedin.svg"
import icon206 from "../imgs/logos_pinterest.svg"
import facebook from "../imgs/iconFacebook.svg"
import Twitter from "../imgs/Twitter(1).svg"


import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const SignUpComp = () => {
  const [name , setName] = useState('');
  const [password , setPassword] = useState('');
  const [email , setEmail] = useState('');


  const navigate = useNavigate();
  

  const handleSubmit1 = e=>
  {
      let userData ={name , password , email }
      //handle Api
     axios.post('http://localhost:5000/admins' , userData)
     .then(res=> {
      toast.success("user registerd successfully !")
      console.log("done")
     
         
              navigate(`/Login`)
      
     })
     .catch(err => {
      toast.error("Network Error")
      console.log("error")
     })
  }

  return (
   
  <section className='ContLog2'>
  
  <div className='FormLogin2'>

  <div className='smartShopIcon2'>
  <img className='Smart2' src={iconSmart} alt='smart' />
  <img className='Shop2' src={iconShop} alt='shop' />
  </div>

  <div className='text1102'>
  <p className='p1101'>تسجيل الدخول</p>
  <p className='p1102'>تسجيل الدخول للمتابعة في موقعنا</p>
  </div>


  <div className='Form5004'>
  <img src={person} alt='iperson ' />
  <input type='text' placeholder='الاسم'  value={name} onChange={e=> setName(e.target.value)}/>
  </div>

  <div className='Form5004'>
  <img src={Email} alt='iEmail ' />
  <input type='email' placeholder='البريد الالكتروني'/>
  </div>


  <div className='Form5004'>
  <img src={pass} alt='icon password ' />
  <input type='password' placeholder=' كلمة المرور' value={password} onChange={e=> setPassword(e.target.value)}/>
  </div>

  <div className='Form5005'>
  <a href='www.goagle.com'> هل نسيت كلمة المرور؟ </a>
  <button className='btnLogIn' onClick={handleSubmit1}> تسجيل الدخول </button>
  </div>

  <div className='text11004'>
  <p>او سجل الدخول عبر:</p>
  </div>

  <div className='iconSocialMedia2'>
  <img src={linkedin} alt='linkedin' />
  <img src={icon206} alt='icon' />
  <img src={facebook} alt='facbook' />
  <img src={Twitter} alt='twitter' />
</div>

  </div>

  <div>
  <div className='picLogin2'>
  <img src={image} alt='girl'/>
  </div>
  <div className='btn52'>
  <Link to={"/Login"} className='btn504'>تسجيل الدخول</Link>
  <Link to={"/SignUp"} className='btn505'>انشاء حساب</Link>
    </div>

  </div>

  </section>
  )
}

export default SignUpComp
