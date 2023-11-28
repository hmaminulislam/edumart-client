import React from 'react'
import '../css/hero.css'
import HeroImg from '../assets/hero/banner_img.png'
import { FaArrowRight } from 'react-icons/fa';
import { PiPhoneCallLight } from "react-icons/pi";
import shapeImg1 from '../assets/hero/bshape_01.png'
import shapeImg2 from '../assets/hero/bshape_02.png'

export default function Hero() {
  return (
    <div className="hero lg:pt-[120px] xl:pt-[150px] pt-[60px] md:pt-[80px] relative">
      <div className="max-w-[1300px] mx-auto px-[16px] sm:px-5 lg:flex items-center xl:gap-[100px] gap-[50px]">
        {/* hero left  */}
        <div className="lg:w-[50%] pb-[50px] xl:pb-[150px] lg:pb-[120px] text-center lg:text-left relative">
          <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
            100% Satisfaction Guarantee
          </span>
          <h1 className="hero-title text-[32px] sm:text-[36px] xl:text-[58px] lg:text-[50px] md:text-[40px] font-[700] text-secondary mt-[18px] md:mt-[14px]">
            Learn <span className="text-primary">Skills</span> From Our Top
            Instructors
          </h1>
          <p className="text-[15px] text-neutral mt-[14px] lg:mt-[20px]">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet
            consectetur adipiscing area we followelit.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-[12px] lg:gap-[20px] mt-[18px] lg:mt-[30px]">
            <button className="flex items-center justify-center gap-2 bg-primary text-white py-[14px] px-[32px] rounded-[6px] hover:bg-secondary transition duration-300">
              Explore Courses <FaArrowRight />
            </button>
            <div className="flex items-center gap-[12px]">
              <PiPhoneCallLight className="text-[45px] text-primary" />
              <div className="flex flex-col">
                <span className="text-neutral">Have any Question?</span>
                <a
                  className="text-secondary text-[20px] font-[600]"
                  href="tel:013-3490-3444"
                >
                  013-3490-3444
                </a>
              </div>
            </div>
          </div>
          <img className='absolute top-[-13px] right-[216px] max-w-[45px]' src={shapeImg2} alt="" />
        </div>
        {/* hero right  */}
        <div className="lg:w-[50%]">
          <img className='mx-auto' src={HeroImg} alt="" />
        </div>
      </div>
      <img className='absolute max-w-[60px] top-[100px] left-[145px]' src={shapeImg1} alt="" />
    </div>
  );
}
