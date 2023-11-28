import React from 'react'
import { FcBusinessman } from "react-icons/fc";
import '../../css/discover.css'
import { FaArrowRight, FaGraduationCap} from "react-icons/fa";
import { RiFolderVideoLine } from "react-icons/ri";
import { RxFileText } from "react-icons/rx";
import aboutImg from '../../assets/discover/about_img01.png';
import aboutImg2 from '../../assets/discover/about_img02.png';
import shpae from '../../assets/discover/about_dots.svg';

export default function Discover() {
  return (
    <div className='2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]'>
        <div className='container-main flex flex-col lg:flex-row items-center lg:gap-[50px] gap-[80px]'>
            {/* left  */}
            <div className='lg:w-[50%] relative flex items-center justify-end'>
                <img className='z-[9]' src={aboutImg} alt="" />
                <img className='hidden lg:block absolute z-[10] xl:left-[-10px] lg:left-0 bottom-[45px] lg:w-[170px] xl:w-auto' src={aboutImg2} alt="" />
                <img className='absolute left-[170px] top-[-33px]' src={shpae} alt="" />
                <div className='hidden xl:block w-[370px] h-[370px] border-[40px] border-[#F2AB22] rounded-full absolute left-[60px] top-[30px]'></div>
                <div className='text-center bg-primary py-[20px] absolute lg:left-[30px] right-[-40px] lg:top-[35px] bottom-[-55px] lg:bottom-auto z-[11] w-[140px] rounded-[10px]'>
                    <h4 className='text-[28px] font-[600] text-white'>12+</h4>
                    <p className='text-white text-[14px] font-[600]'>Years of Experiences</p>
                </div>
            </div>
            {/* right  */}
            <div className='lg:w-[50%]'>
                <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
                100% Satisfaction Guarantee
                </span>
                <h2 className='text-[38px] font-[700] text-secondary discover-title mt-[15px] mb-[12px]'>Discover Top <span className='text-primary'>Instructors</span> Around The World</h2>
                <p className="text-[15px] text-neutral font-[300]">Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattis Borem ipsum dolor awes atnse awctetur adipis we followelit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                {/* right bottom grid  */}
                <div className='grid grid-cols-2 sm:gap-[35px] gap-[15px] mt-[35px] mb-[25px] max-w-[500px] lg:w-auto'>
                    {/* item */}
                    <div className='flex items-center gap-[8px]'>
                        <FcBusinessman className='sm:text-[50px] text-[40px]' />
                        <div className='flex flex-col'>
                            <span className='text-secondary sm:font-[500] font-[400] sm:text-base text-[14px]'>20000</span>
                            <span className='text-secondary sm:font-[500] font-[400] sm:text-base text-[14px] leading-4'>Expert Tutors</span>
                        </div>
                    </div>
                    {/* item */}
                    <div className='flex items-center gap-[8px]'>
                        <RxFileText className='sm:text-[50px] text-[40px] text-indigo-400'/>
                        <div className='flex flex-col'>
                            <span className='text-secondary sm:font-[500] font-[400] sm:text-base text-[14px]'>2500</span>
                            <span className='text-secondary sm:font-[500] font-[400] sm:text-base text-[14px] leading-4'>Top Lessons</span>
                        </div>
                    </div>
                    {/* item */}
                    <div className='flex items-center gap-[8px]'>
                        <FaGraduationCap className='sm:text-[50px] text-[40px] text-purple-500' />
                        <div className='flex flex-col'>
                            <span className='text-secondary sm:font-[500] font-[400] sm:text-base text-[14px]'>12000</span>
                            <span className='text-secondary sm:font-[500] font-[400] sm:text-base text-[14px] leading-4'>Over Students</span>
                        </div>
                    </div>
                    {/* item */}
                    <div className='flex items-center gap-[8px]'>
                        <RiFolderVideoLine className='sm:text-[50px] text-[40px] text-red-500' />
                        <div className='flex flex-col'>
                            <span className='text-secondary sm:font-[500] font-[400] sm:text-base text-[14px]'>4600</span>
                            <span className='text-secondary sm:font-[500] font-[400] sm:text-base text-[14px] leading-4'>Pro Videos</span>
                        </div>
                    </div>
                </div>
                <button className="flex items-center justify-center gap-2 bg-primary text-white py-[14px] sm:px-[32px] px-[25px] rounded-[6px] hover:bg-secondary transition duration-300">Discover More <FaArrowRight /></button>
            </div>
        </div>
    </div>
  )
}
