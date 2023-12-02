import React, { useEffect } from 'react'
import '../../../css/home/hero.css'
import HeroImg from '../../../assets/hero/banner_img.png'
import { FaArrowRight, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { PiPhoneCallLight } from "react-icons/pi";
import shapeImg1 from '../../../assets/hero/bshape_01.png'
import shapeImg2 from '../../../assets/hero/bshape_02.png'
import shapeImg3 from '../../../assets/hero/bshape_03.png'
import shapeImg4 from '../../../assets/hero/bshape_04.png'
import shapeImg5 from '../../../assets/hero/bshape_05.png'
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";


export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: "1500", once: true });
  }, []);
  return (
    <div className="hero lg:pt-[120px] xl:pt-[150px] pt-[60px] md:pt-[80px] relative">
      <div className="max-w-[1300px] mx-auto px-[16px] sm:px-5 lg:flex items-center xl:gap-[100px] gap-[50px]">
        {/* hero left  */}
        <div className="lg:w-[50%] pb-[50px] xl:pb-[150px] lg:pb-[120px] text-center lg:text-left relative">
          <div data-aos="fade-right" data-aos-delay="0">
            <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
              100% Satisfaction Guarantee
            </span>
          </div>
          <div data-aos="fade-right" data-aos-delay="100">
            <h1 className="hero-title text-[32px] sm:text-[36px] xl:text-[57px] lg:text-[50px] md:text-[40px] font-[700] text-secondary mt-[18px] md:mt-[14px]">
              Learn <span className="text-primary">Skills</span> From Our Top
              Instructors
            </h1>
          </div>
          <div data-aos="fade-right" data-aos-delay="200">
            <p className="text-[15px] text-neutral mt-[14px] lg:mt-[20px]">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet
              consectetur adipiscing area we followelit.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="flex flex-col lg:flex-row items-center gap-[12px] lg:gap-[20px] mt-[18px] lg:mt-[30px]"
          >
            <button className="flex items-center justify-center gap-2 bg-primary text-white py-[14px] sm:px-[32px] px-[25px] rounded-[6px] hover:bg-secondary transition duration-300">
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
          <img
            className="absolute lg:top-[-13px] xl:right-[216px] lg:right-[160px] md:right-[230px] sm:right-[100px] right-[10px] lg:max-w-[45px] sm:top-[-5px] top-[-30px] max-w-[35px]"
            src={shapeImg2}
            alt=""
          />
        </div>
        {/* hero right  */}
        <div className="lg:w-[50%] relative">
          <img className="mx-auto" src={HeroImg} alt="" />
          <img
            data-aos="fade-down-right"
            data-aos-delay="200"
            className="absolute sm:max-w-[65px] max-w-[40px] sm:top-[85px] top-0 lg:left-[105px] md:left-[230px] sm:left-[200px] left-[60px]"
            src={shapeImg3}
            alt=""
          />
          <img
            data-aos="fade-right"
            data-aos-delay="200"
            className="absolute sm:max-w-[85px] max-w-[55px] sm:bottom-[140px] bottom-[75px] lg:left-[-80px] sm:left-[10px] left-[-36px]"
            src={shapeImg4}
            alt=""
          />
          <img
            data-aos="fade-down-left"
            data-aos-delay="200"
            className="absolute sm:max-w-[55px] max-w-[35px] top-[60px] lg:right-[20px] md:right-[170px] sm:right-[115px] right-[10px]"
            src={shapeImg5}
            alt=""
          />
          <div className="absolute text-center bg-white rounded-[20px] lg:left-[27px] md:left-[100px] sm:left-[60px] left-[0px] lg:top-[180px] sm:top-[200px] top-[50px] 2xl:px-[40px] sm:px-[35px] px-[20px] py-[14px]">
            <FaUsers className="bg-[#12BB6A] text-[22px] sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] sm:p-[15px] p-[8px] rounded-full text-white mx-auto" />
            <span className="font-[300] mt-[7px] inline-block sm:text-[12px] text-[10px]">
              Total Students
            </span>
            <CountUp
              start={1}
              end={15}
              delay={2}
              duration={4}
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <h4 className="sm:text-[24px] text-[20px] text-secondary font-[700]">
                  <span ref={countUpRef} />K
                </h4>
              )}
            </CountUp>
          </div>
          <div className="absolute text-center bg-white rounded-[14px] 2xl:right-[-65px] lg:right-[-15px] md:right-[15px] right-0 lg:bottom-[70px] md:bottom-[155px] bottom-[180px] px-5 py-[14px] hidden sm:block">
            <FaGraduationCap className="bg-[#8121FB] text-[22px] w-[60px] h-[60px] p-[15px] rounded-full text-white mx-auto mt-[-50px]" />
            <span className="font-[300] mt-[7px] inline-block text-[12px]">
              Complete Graduation
            </span>
            <CountUp
              start={1}
              end={32}
              delay={2}
              duration={4}
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <h4 className="text-[24px] text-secondary font-[700]">
                  <span ref={countUpRef} />K
                </h4>
              )}
            </CountUp>
          </div>
        </div>
      </div>
      <img
        className="absolute earth-img lg:max-w-[60px] sm:max-w-[50px] max-w-[35px] 2xl:top-[100px] 2xl:left-[145px] xl:top-[-7rem] lg:top-[-6rem] sm:top-[200px] top-[340px] sm:left-[2.5rem] left-[2px]"
        src={shapeImg1}
        alt=""
      />
    </div>
  );
}
