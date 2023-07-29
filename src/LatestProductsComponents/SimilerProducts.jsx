import React ,{useState} from 'react'
import { RiStarSFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import imgp1 from '../imgs/Rectangle 3677(11).png'
import imgp2 from '../imgs/Rectangle 3677(12).png'
import imgp3 from '../imgs/Rectangle 3677(13).png'
import imgp4 from '../imgs/Rectangle 3677(14).png'
import imgp5 from '../imgs/Rectangle 3677(15).png'


const SimilerProducts = () => {
  const [showLink1 , setShowLink1] = useState(false);
  const [showLink2 , setShowLink2] = useState(false);
  const [showLink3 , setShowLink3] = useState(false);
  const [showLink4 , setShowLink4] = useState(false);
  const [showLink5 , setShowLink5] = useState(false);
  return (
    <div>
    <section className='toptop'>
    <h1>منتجات متشابهة</h1>
    </section>
    <section className='sliderBrand2'>
        <section className='sliderB'>
        {/*brand1*/}
                <div className='br'>
                    <div>
                        <img onMouseOver={() => setShowLink1(true)}
                        onMouseLeave={() => setShowLink1(false)} src={imgp1} alt='pic1' />
                    </div>
                {/*link*/}
                {showLink1 && (
    
                  <div className='linkk'>
                  <button>أضف للعربة</button>
              </div>
                 
                          )}
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
                        <img onMouseOver={() => setShowLink2(true)}
                        onMouseLeave={() => setShowLink2(false)} src={imgp2} alt='pic1' />
                    </div>
                {/*link*/}
                {showLink2 && (
    
                  <div className='linkk'>
                  <button>أضف للعربة</button>
              </div>
                 
                          )}
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
                        <img onMouseOver={() => setShowLink3(true)}
                        onMouseLeave={() => setShowLink3(false)} src={imgp3}  alt='pic1' />
                    </div>
                {/*link*/}
                {showLink3 && (
    
                  <div className='linkk'>
                  <button>أضف للعربة</button>
              </div>
                 
                          )}
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






                     {/*brand4*/}
                <div className='br'>
                <div>
                    <img onMouseOver={() => setShowLink4(true)}
                    onMouseLeave={() => setShowLink4(false)} src={imgp4} alt='pic1' />
                </div>
            {/*link*/}
            {showLink4 && (
    
              <div className='linkk'>
              <button>أضف للعربة</button>
          </div>
             
                      )}
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





                 {/*brand 5*/}
                 <div className='br'>
                 <div>
                     <img onMouseOver={() => setShowLink5(true)}
                     onMouseLeave={() => setShowLink5(false)} src={imgp5} alt='pic1' />
                 </div>
             {/*link*/}
             {showLink5 && (
    
              <div className='linkk'>
              <button>أضف للعربة</button>
          </div>
             
                      )}
              
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
    
    </div>
  )
}

export default SimilerProducts