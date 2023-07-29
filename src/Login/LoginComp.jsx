import React , { useState } from 'react'
import "./LoginComp.scss"
import { Link } from 'react-router-dom'
import image from "../imgs/Rectangle 3706.png"
import iconSmart from "../imgs/smartPic.svg"
import iconShop from "../imgs/shopPic.png"
import person from "../imgs/iconPerson.svg"
import pass from "../imgs/iconPassword.svg"
import linkedin from "../imgs/linkedin.svg"
import icon206 from "../imgs/logos_pinterest.svg"
import facebook from "../imgs/iconFacebook.svg"
import Twitter from "../imgs/Twitter(1).svg"

import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const LoginComp = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();


   const handleSubmit = e => {
    //let userData = { password, email }
    //handle Api
   axios.get(`http://localhost:5000/admins/1`)
   .then(res=>{
    toast.success('admin logged success')
    navigate('/')
   })
   .catch(e=>{
    toast.error(e.message)
   })
  }

  return (
   
  <section className='ContLog'>
  
  <div className='FormLogin'>

  <div className='smartShopIcon'>
  <img className='Smart' src={iconSmart} alt='smart' />
  <img className='Shop' src={iconShop} alt='shop' />
  </div>

  <div className='text1101'>
  <p className='p1101'>تسجيل الدخول</p>
  <p className='p1102'>تسجيل الدخول للمتابعة في موقعنا</p>
  </div>


  <div className='Form504'>
  <img src={person} alt='icon person ' />
  <input type='email' placeholder='البريد الالكتروني' value={email} onChange={e => setEmail(e.target.value)}/>
  </div>


  <div className='Form504'>
  <img src={pass} alt='icon password ' />
  <input type='password' placeholder=' كلمة المرور' value={password} onChange={e => setPassword(e.target.value)} />
  </div>

  <div className='Form505'>
  <a href='www.goagle.com'> هل نسيت كلمة المرور؟ </a>
  <button className='btnLogIn' onClick={handleSubmit}> تسجيل الدخول </button>
  </div>

  <div className='text1104'>
  <p>او سجل الدخول عبر:</p>
  </div>

  <div className='iconSocialMedia'>
  <img src={linkedin} alt='linkedin' />
  <img src={icon206} alt='icon' />
  <img src={facebook} alt='facbook' />
  <img src={Twitter} alt='twitter' />
</div>

  </div>

  <div>
  <div className='picLogin'>
  <img src={image} alt='girl'/>
  </div>
  <div className='btn5'>
  <Link to={"/Login"} className='btn504'>تسجيل الدخول</Link>
  <Link to={"/SignUp"} className='btn505'>انشاء حساب</Link>
    </div>

  </div>

  </section>
  )
}

export default LoginComp
