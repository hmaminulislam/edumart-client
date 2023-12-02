import React from 'react'
import '../../../css/about-us/offer.css'
import { FaArrowRight } from 'react-icons/fa';
import shape1 from '../../../assets/about-us/offer/cta_shape001.svg'
import shape2 from '../../../assets/about-us/offer/cta_shape002.png'
import shape3 from '../../../assets/about-us/offer/cta_shape003.svg'

export default function Offer() {
  return (
    <div className="offer 2xl:py-[160px] xl:py-[130px] md:py-[110px] sm:py-[90px] py-[80px]">
      <div className="container-main flex flex-col sm:gap-[12px] gap-[8px] items-center justify-center text-center">
        <p className="text-white">ARE YOU READY FOR THIS OFFER</p>
        <h2 className="lg:text-[48px] md:text-[42px] sm:text-[34px] text-[28px] font-[600] text-white">
          50% Offer For Very First 50
        </h2>
        <h5 className="sm:text-[25px] text-[20px] font-[500] text-white mb-[12px]">
          Student’s & Mentors
        </h5>
        <button className="flex items-center justify-center gap-2 bg-primary text-white py-[14px] sm:px-[32px] px-[25px] rounded-[6px] hover:bg-secondary transition duration-300">
          Become a Student <FaArrowRight />
        </button>
          </div>
          <img className='absolute top-0 left-0 opacity-[0.07] xl:w-[auto] lg:w-[200px] md:w-[140px] w-[100px]' src={shape1} alt="" />
          <img className='absolute xl:top-[150px] lg:top-[80px] top-[60px] xl:left-[150px] lg:left-[80px] left-[60px] xl:max-w-[120px] lg:w-[90px] md:w-[70px] opacity-[0.9] hidden md:block' src={shape2} alt="" />
          <img className='absolute bottom-0 right-0 xl:w-[auto] lg:w-[180px] md:w-[140px] sm:w-[100px] hidden sm:block' src={shape3} alt="" />
    </div>
  );
}
