import React from 'react'
import brandImg1 from '../../../assets/home/client-slider/brand01.png'
import brandImg2 from '../../../assets/home/client-slider/brand02.png'
import brandImg3 from '../../../assets/home/client-slider/brand03.png'
import brandImg4 from '../../../assets/home/client-slider/brand04.png'
import brandImg5 from '../../../assets/home/client-slider/brand05.png'
import brandImg6 from '../../../assets/home/client-slider/brand06.png'
import brandImg7 from '../../../assets/home/client-slider/brand07.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../css/home/client-slider.css'

export default function ClientSlider() {
    const data = [
        {img: brandImg1},
        {img: brandImg2},
        {img: brandImg3},
        {img: brandImg4},
        {img: brandImg5},
        {img: brandImg6},
        {img: brandImg7},
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1280, 
            settings: {
                slidesToShow: 4,
            }
            },
            {
                breakpoint: 540, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
            },
            {
                breakpoint: 430, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
            },
            {
                breakpoint: 320,
            settings: {
                slidesToShow: 3,
            }
            },
        ]
      };
  return (
    <div className='overflow-hidden border-b border-[#eeeeee]'>
        <div className='container-main'>
            <div className='md:py-[50px] py-[20px] sm:py-[30px]'>
            <Slider {...settings}>
                {data.map((item, index)=> <div key={index} className='client-slide-item'><img className='brand-img sm:max-w-[110px] md:max-w-[150px]' src={item.img} alt="" /></div>)}
            </Slider>
            </div>
        </div>
    </div>
  )
}
