import React ,{useState} from 'react'
import "../ServComScss/ProductDetails.scss"
import { RiStarSFill } from "react-icons/ri";
import ellipse1 from "../imgs/Ellipse 186.png";
import ellipse2 from "../imgs/Ellipse 187.png";
import ellipse3 from "../imgs/Ellipse 188.png";
import ellipse4 from "../imgs/Ellipse 189.png";
import wathsapp from "../imgs/Component.svg"
import youtupe from "../imgs/Youtube.svg"
import facbook from "../imgs/Facebook - Original.svg"
import twiteer from "../imgs/Twitter.svg"
//import { AiFillHeart } from "react-icons/ai";
import fav from "../imgs/favorite.svg"


const ProductDetails = () => {
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

  const imgs =[

    {id:0 , value:"https://s3-alpha-sig.figma.com/img/9403/982f/73719290c6a765857ddb341640776c5d?Expires=1690761600&Signature=CEe7xliXsnhwuNruWGmUl6JKMUQSLWHR3oJVmZcv9dCAGWvuMz2rIV8FnpDjtzHI0kbT-bq7Tu~zYHkaqYp-uAw9e5nDAD28nCV6zM3dREjknbvgieGwHejsaUPVwboJ~opUdVrXkedZxIRqokx08Ka1AcE7KpRvFtxo7vn4cF9qf5YrRRxU1Wt9jYXnI-QOVvEw5WN8euQ8nVcKakIEfSZYqjmhL~k5CBwDUk5KvvPtWzWnMql3QiaT04XQmuhM79e8B2l9HKCVf1P7bkdtMFqp9fvTHM3vlfX9LH98pDLW8Qdn7kMDQxu6WQu~aqmYTyChShXuo3pqVSBEi61c1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
    {id:1 , value:"https://s3-alpha-sig.figma.com/img/e58d/9c26/d84ea266df0d7bd2214880e2d33430de?Expires=1690761600&Signature=AxCCk5Xv3L1a5-rbNXVhKbTu43XS6snCDHJ130HajQmNK-k5W6fJ~rRALoHP2uI7g~3bHxT~dM7mIVU3NZAIxRbGSMwu7rcOCOPSgHwly7pTnHYwgl5xQwDgKS2Tvd32tNB5737VsbPBmZmSP8o5ia9pKd6LRVaOA4caOwXtC3fx-VdqTxvDCkuehObdw1Ayw96h~nqeXGG3rX03i6Zt5jF1Su~0OIhivPHepeqjR8z5GSLBK9ksAjwXSSBUBewXGO9nJRZshOtiijh1had7yyBLNH4plaRXh5zUSCJE2e15wT~yUoBybXy2Minr8Epp5vm4DPsUGjk4Sa5icZGUWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
    {id:2 , value:"https://s3-alpha-sig.figma.com/img/e6ae/1590/53a17d8347010ed317d76b9e8faa0a68?Expires=1690761600&Signature=QEFDWQXhyEiMdlBBWcf1BQRRyJNK6g04Q~5wgxMlsiGGQUCvESpqzxFX1c~QpAD5UT5bzEgSGwXe0D7n~dWYnSN-rIuQiigyPgMc91zlmwf00QAHP~naSReXTCHChYYYn3oKMO5kkvfyVXZQ~Fl0KgMuR63zSPZlGM8lhd-hdqtdjvaKZ1gPJj4det3RRDHynsFv8C0FmHOchHIYtpHF-kMETbGJdvJQh30PXEofM2E8VYE6kcEO2IZFnB5j~tb1Ai8xPxeX7TqwuQM~I~Pg4PtS29hNMXhDyB2hjJa7hzvzsNp~shFLTEe0zQIkJ1fSYOwsZhETQBe~yBwCUVXcPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
    {id:3 , value:"https://s3-alpha-sig.figma.com/img/c4d4/06a5/cec56ae398a8f9f37ceb6f3d7a80428c?Expires=1690761600&Signature=V5bvZSXM1lmAPCHGJ3anPwIO0KMJGReE2RYIbODJsy~mjWdCFp4Dq35ZEMUjV~KbQ0FZApMwEcDqu0xCiWzzLeJ2hss-A7x8eZlqccXmeIkHGScya7u2N5MyqWpjJ62dqTkmx9d9qYOpP7V8zRRQPLEQZXqE0Bkj3HHonkrjYqRtHCTEZLs5RoqecZkO6vCIGrsRnqoay2f60oZcN59P7STGb5Jj7nU5ah8CG7l4U7dkfUV4P6xazxB-UdYP2uhmwoynT~nMjThh6319NFBwwv7JM6TK-0xzW2DwAm94kHjWFYwzKK4BIq8NLKMhUnRYUuToFg3QyBobeLBZE-kKNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
    {id:4 , value:"https://s3-alpha-sig.figma.com/img/e58d/9c26/d84ea266df0d7bd2214880e2d33430de?Expires=1690761600&Signature=AxCCk5Xv3L1a5-rbNXVhKbTu43XS6snCDHJ130HajQmNK-k5W6fJ~rRALoHP2uI7g~3bHxT~dM7mIVU3NZAIxRbGSMwu7rcOCOPSgHwly7pTnHYwgl5xQwDgKS2Tvd32tNB5737VsbPBmZmSP8o5ia9pKd6LRVaOA4caOwXtC3fx-VdqTxvDCkuehObdw1Ayw96h~nqeXGG3rX03i6Zt5jF1Su~0OIhivPHepeqjR8z5GSLBK9ksAjwXSSBUBewXGO9nJRZshOtiijh1had7yyBLNH4plaRXh5zUSCJE2e15wT~yUoBybXy2Minr8Epp5vm4DPsUGjk4Sa5icZGUWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
  ]
 
  const [sliderData , setSliderData]=useState(imgs[0])
  const handleClick=(index)=>
  {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);

  }

  return (
    <section className='ConDetails'>
      <section className='Left'>{/**section text in the left */}

      <div className='type1'> {/* فستان ازرق عصري*/}
      <h1>فستان ازرق عصري</h1>
      </div>{/* end فستان ازرق عصري*/}


     <div className='type2'>{/**price 1500 - 2000 */}

     <p className='pUnNormal'> 2000 ج.م </p>
     <p className='pNormal'>1500 ج.م - </p>
     
    
     </div>


     <div className='Stars'>{/**Stars */}

     <div className='number'> <p> (50)</p></div>
     <div className='starGolden'><RiStarSFill/></div>
     <div className='starGolden'><RiStarSFill/></div>
     <div className='starGolden'><RiStarSFill/></div>
     <div className='starGolden'><RiStarSFill/></div>
     <div className='starGolden'><RiStarSFill/></div>
    
     </div>{/**end stars */}


     <div className='type3'>{/**descri */}
     <p>مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>
     </div>{/**end description */}


     <div className='type4'>{/** text color */}
     <h1>اللون :</h1>
     
     </div>{/**end text color */}

     <div className='FourPics'>{/**under color pics */}
     <img src={ellipse1} alt='COLOR' />
     <img src={ellipse2} alt='COLOR' />
     <img src={ellipse3} alt='COLOR' />
     <img src={ellipse4} alt='COLOR' />
     </div>{/**end under color pics */}


     <div className='type5'>{/** text weight */}
     <h1>الوزن :</h1>
     </div>{/**end text weight */}


     <div className='sizeBox'>{/**  size box */}
     <div className='Frame'><p> 5 كيلو </p></div>
     <div className='Frame'><p> 3 كيلو </p></div>
     <div className='Frame'><p> 2 كيلو </p></div>
     
     
     
     </div>{/** end size box */}


     <div className='CountCounterAndBtn'>{/**  Count Counter And Btn*/}
     
     <div className='btno'>
     <button className='addToCard'>اضف للسلة</button>
     </div>


     <div className='counterSpeed'>
 
    
  
    <button className='minus' type="button" onClick={decNum}>-</button>
 
  <input type="text"  value={num} onChange={handleChange}/>
 
    <button className='plus'  type="button" onClick={incNum}>+</button>

     </div>
     

     
     </div>{/** end Count Counter And Btn*/}


     <div className='heartAndText'>
     <div className='intel'><h5>اضف للمفضلة</h5></div>
     <div className='iconH'>
     <img src={fav} alt='fav' />
     </div>
     </div>

     <div>
     <button className='full'>اشتري الان</button>
     </div>

    <div className='SocialMe'>
    <div className='samsungDis'>
    <h5> شارك عبر مواقع التواصل </h5>
    </div>
    <div className='iconSocial'>
    <img src={wathsapp} alt='icon'/>
    <img src={youtupe} alt='icon'/>
    <img src={facbook} alt='icon'/>
    <img src={twiteer} alt='icon'/>
    </div>
    </div>


      </section>{/**end section text in the left */}



      <section className='Right'>{/**section slider in the right */}
      <div className='Sealy'>
      <img className='bigImg' src={sliderData.value} height={701} width={745} alt='big' />
      <div className='flex_row'>
      
      {
        imgs.map((data,i)=>
        <div className='Thump'>
        <img key={data} src={data.value}  onClick={()=>handleClick(i)} height="132" width="134" alt='small' />
        </div>
        )
      }

      </div>

      </div>
      </section>{/**end section slider in the right  */}
    </section> 
  )
}

export default ProductDetails
