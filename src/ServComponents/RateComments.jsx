import React, { useState } from 'react'
import "../ServComScss/RateComments.scss"
import ReactStars from "react-rating-stars-component"
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import imgComm from "../imgs/Ellipse 190.png"

const RateComments = () =>{
  const [data1 , setData1] = useState('');
  const [data2 , setData2] = useState('');
  const [data3 , setData3] = useState('');
  const [data4 , setData4] = useState('');
  const [data5 , setData5] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit = e => {
  let userData = { data1, data2,data3,data4,data5 }
    //handle Api
   axios.post(` http://localhost:5000/posts` , userData)
   .then(res=>{
    toast.success('data send success')
    //navigate('/users')
   })
   .catch(e=>{
    toast.error(e.message)
   })
  }
    const ratingChanged = (newRating ) =>
      {
        console.log(newRating);
        setData5(newRating)
      };

      

      
  return (
    
    <section className='RateContianer'> {/*main section*/}


    <div className='button_Contianer'>
    <button className='buttonPage1'>
    اكتب تقييمك هنا
    </button>
    <button className='buttonPage3'>
    معلومات اضافية
    </button>
    <button className='buttonPage3'>
    الوصف 
    </button>
    </div>
    <div className='Line'>
    
    </div>



    <div className='RateData'>{/*contianerr for left an right*/}
    <div className='SendApi'>{/*leftSide*/}
    <h4>اضف تقييم</h4>
    <div className='starText'>

    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
    value={data5}
    
    
    />

    <h5>تقييمك</h5>
 
    </div>
    

    <div className='inputOne'>
    <input type='text' placeholder='عنوان التقييم' value={data1} onChange={e => setData1(e.target.value)} />
    </div>

    <div className='inputTwo'>
    <input type='text' placeholder=' اكتب تقييمك هنا ' value={data2} onChange={e => setData2(e.target.value)} />
    </div>

    <div className='inputThree'>
    <input className='un' type='email' placeholder='بريدك الالكتروني' value={data3} onChange={e => setData3(e.target.value)} />
    <input className='du' type='text' placeholder=' اسمك' value={data4} onChange={e => setData4(e.target.value)} />
    </div>

    <button onClick={handleSubmit} className='sendData'>أضف الآن</button>

    </div>{/*left side*/}


      {/*right side*/}

  <div className='productComments'>  {/*productComments*/}  {/*main section*/}

  <section className='comments'>  {/*start of comments*/}
  <div className='tenRate'> 10 تقييمات</div>   {/*ten rate*/}
        <div className='comment'>
  <div className='commentt'>{/*comment1*/} 
                <div className='commentText'>  {/* start of text*/}
                    <p className='ct1'> منتج رائع. التعبئة والتغليف كانت جيدة أيضا! </p>
                    <p className='ct2'> مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق </p>
                    <div className='reactStars'>
                    <ReactStars size={23}/>
                    </div>
  <div className='name_date'>{/*name and date*/}
                        <p className='date'> 9 اغسطس, 2022  </p>
                        <p className='name'> احمد بلال </p>
                    </div>
                </div>  {/*end of div(commentText)*/}
  <div className='imgComment' style={{marginLeft: "25px"}}>  {/*img comment*/} 
                    <img src={imgComm} alt='img'/>
                </div>  {/*end of div(img comment)*/}
                
            </div>  {/*end of div(commentt)*/}

  <div className='commentt'>{/*comment2*/} 
                <div className='commentText'>  {/* start of text*/}
                    <p className='ct1'> منتج رائع. التعبئة والتغليف كانت جيدة أيضا! </p>
                    <p className='ct2'> مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق </p>
                    <div className='reactStars'>
                    <ReactStars size={23}/>
                    </div>
  <div className='name_date'>{/*name and date*/}
                        <p className='date'> 9 اغسطس, 2022  </p>
                        <p className='name'> احمد بلال </p>
                    </div>
                </div>  {/*end of div(commentText)*/}
  <div className='imgComment' style={{marginLeft: "25px"}}>  {/*img comment*/} 
                    <img src={imgComm} alt='img'/>
                </div>  {/*end of div(img comment)*/}
                
            </div>  {/*end of div(commentt)*/}
            
  <div className='commentt'>{/*comment3*/} 
                <div className='commentText'>  {/* start of text*/}
                    <p className='ct1'> منتج رائع. التعبئة والتغليف كانت جيدة أيضا! </p>
                    <p className='ct2'> مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق </p>
                    <div className='reactStars'>
                    <ReactStars size={23}/>
                    </div>
  <div className='name_date'>{/*name and date*/}
                        <p className='date'> 9 اغسطس, 2022  </p>
                        <p className='name'> احمد بلال </p>
                    </div>
                </div>  {/*end of div(commentText)*/}
               <div className='imgComment' style={{marginLeft: "25px"}}>  {/*img comment*/} 
                    <img src={imgComm} alt='img'/>
                </div>  {/*end of div(img comment)*/}
                
            </div>  {/*end of div(commentt)*/}

            

        </div>  {/*end of div(comment)*/}
  </section>  {/*end of comments*/}
</div>

    </div>{/*contianerr for left an right*/}

 

    </section>

    
  )
}

export default RateComments
