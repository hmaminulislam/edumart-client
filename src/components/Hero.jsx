import React from 'react'
import '../css/hero.css'
import HeroImg from '../assets/hero/banner_img.png'
import { FaArrowRight } from 'react-icons/fa';
import { PiPhoneCallLight } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="hero pt-[100px]">
      <div className="max-w-[1300px] mx-auto px-[16px] sm:px-5 flex items-center xl:gap-[100px] gap-[50px]">
        {/* hero left  */}
        <div className="md:w-[50%] pb-[100px]">
          <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
            100% Satisfaction Guarantee
          </span>
          <h1 className="xl:text-[58px] font-[700] text-secondary">
            Learn <span className="text-primary">Skills</span> From Our Top
            Instructors
          </h1>
          <p className="text-[15px] text-neutral mt-[20px]">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet
            consectetur adipiscing area we followelit.
          </p>
          <div className='flex items-center gap-[20px] mt-[30px]'>
            <button className="flex items-center justify-center gap-2 bg-primary text-white py-[14px] px-[32px] rounded-[6px] hover:bg-secondary transition duration-300">
              Explore Courses <FaArrowRight />
            </button>
            <div className='flex items-center gap-[12px]'>
              <PiPhoneCallLight className='text-[45px] text-primary' />
              <div className='flex flex-col'>
                <span className='text-neutral'>Have any Question?</span>
                <a className='text-secondary text-[20px] font-[600]' href="">
                  013-3490-3444
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* hero right  */}
        <div className="md:w-[50%]">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
}
