import React, { useEffect } from 'react'
import '../../../css/home/browse.css'
import { FaArrowRight } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";
import {
  PiSpeakerHighLight,
  PiCodeSimple,
  PiChartBarThin,
} from "react-icons/pi";
import { AiOutlineBulb } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";
import shape from '../../../assets/browse/browse.png'
import shape2 from '../../../assets/browse/browse_2.svg'
import "aos/dist/aos.css";

export default function Browse() {
  
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex lg:flex-row flex-col lg:items-center gap-[50px]">
        {/* left  */}
        <div className="lg:w-[40%] relative">
          <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
            Unique online courses
          </span>
          <h2 className="sm:text-[36px] text-[28px] font-[600] text-secondary section-title mt-[15px] mb-[12px]">
            Browse By <span className="text-primary">Categories</span>
          </h2>
          <p className="text-[15px] text-neutral font-[300] mb-[14px]">
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe awut elit
            ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes atnse
            awctetur.
          </p>
          <button className="flex items-center justify-center gap-2 bg-primary text-white py-[14px] sm:px-[32px] px-[25px] rounded-[6px] hover:bg-secondary transition duration-300">
            All Categories <FaArrowRight />
          </button>
          <img
            data-aos="fade-down"
            data-aos-delay="200"
            className="absolute left-[160px] bottom-[-185px] z-[-1] max-w-[120px] hidden lg:block"
            src={shape}
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            className="absolute sm:right-[60px] right-0 sm:top-[-50px] top-[-20px] z-[-1] max-w-[120px]"
            src={shape2}
            alt=""
          />
        </div>
        {/* right  */}
        <div className="lg:w-[60%]">
          <div className="grid sm:grid-cols-3 grid-cols-1 xl:gap-[30px] lg:gap-[20px] md:gap-[35px] sm:gap-[20px] gap-[25px]">
            {/* browse item  */}
            <div className="bg-[#F4F7FB] text-center py-[25px] px-[10px] rounded-[8px] browse-item">
              <CiEdit className="w-[85px] h-[85px] p-[18px] rounded-full bg-white text-primary mx-auto browse-icon" />
              <h4 className="text-secondary text-[20px] font-[500] pt-[10px] pb-[8px]">
                3D Animation
              </h4>
              <p className="text-neutral font-[300]">06 Courses</p>
            </div>
            {/* browse item  */}
            <div className="bg-[#F4F7FB] text-center py-[25px] px-[10px] rounded-[8px] browse-item">
              <PiSpeakerHighLight className="w-[85px] h-[85px] p-[18px] rounded-full bg-white text-primary mx-auto browse-icon" />
              <h4 className="text-secondary text-[20px] font-[500] pt-[10px] pb-[8px]">
                Marketing
              </h4>
              <p className="text-neutral font-[300]">09 Courses</p>
            </div>
            {/* browse item  */}
            <div className="bg-[#F4F7FB] text-center py-[25px] px-[10px] rounded-[8px] browse-item">
              <PiChartBarThin className="w-[85px] h-[85px] p-[18px] rounded-full bg-white text-primary mx-auto browse-icon" />
              <h4 className="text-secondary text-[20px] font-[500] pt-[10px] pb-[8px]">
                Finance
              </h4>
              <p className="text-neutral font-[300]">08 Courses</p>
            </div>
            {/* browse item  */}
            <div className="bg-[#F4F7FB] text-center py-[25px] px-[10px] rounded-[8px] browse-item">
              <PiCodeSimple className="w-[85px] h-[85px] p-[18px] rounded-full bg-white text-primary mx-auto browse-icon" />
              <h4 className="text-secondary text-[20px] font-[500] pt-[10px] pb-[8px]">
                Development
              </h4>
              <p className="text-neutral font-[300]">10 Courses</p>
            </div>
            {/* browse item  */}
            <div className="bg-[#F4F7FB] text-center py-[25px] px-[10px] rounded-[8px] browse-item">
              <BsBrightnessHigh className="w-[85px] h-[85px] p-[18px] rounded-full bg-white text-primary mx-auto browse-icon" />
              <h4 className="text-secondary text-[20px] font-[500] pt-[10px] pb-[8px]">
                Design
              </h4>
              <p className="text-neutral font-[300]">04 Courses</p>
            </div>
            {/* browse item  */}
            <div className="bg-[#F4F7FB] text-center py-[25px] px-[10px] rounded-[8px] browse-item">
              <AiOutlineBulb className="w-[85px] h-[85px] p-[18px] rounded-full bg-white text-primary mx-auto browse-icon" />
              <h4 className="text-secondary text-[20px] font-[500] pt-[10px] pb-[8px]">
                Graphic Design
              </h4>
              <p className="text-neutral font-[300]">09 Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
