import React from 'react'
import image1 from '../imgs/1-removebg-preview (1) 1(1).png';
import image2 from '../imgs/2-removebg-preview (1) 1.png';

const Offers = () => {
    return (
        <section className='offers'>
            <section className='girl'>
                <div className='text'>
                    <p className='para3'>خصم كبير</p>
                    <p className='para4'>فساتين بناتي</p>
                    <a className='btn1'>تسوق الان</a>
                </div>
                <div className='lady'>
                    <img src={image2} alt='lady' />
                </div>
            </section>


            <section className='boy'>
                <div className='text'>
                    <p className='para4'>ملابس الاطفال</p>
                    <p className='para3'>%50 خصم</p>
                    <a className='btn2'>تسوق الان</a>
                </div>
                <div>
                    <img src={image1} alt='boy'/>
                </div>
            </section>
        </section>

    )
}

export default Offers