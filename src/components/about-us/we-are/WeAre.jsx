import React, { useEffect } from 'react'
import aboutImg1 from "../../../assets/about-us/we-are/about_img03.jpg";
import aboutImg2 from "../../../assets/about-us/we-are/about_img04.jpg";
import aboutImg3 from "../../../assets/about-us/we-are/about_img05.jpg";
import aboutSpape1 from "../../../assets/about-us/we-are/about_shape01.png";
import aboutSpape2 from "../../../assets/about-us/we-are/about_shape02.png";
import aboutSpape3 from "../../../assets/about-us/we-are/about_shape03.png";
import { FaArrowRight } from "react-icons/fa";
import '../../../css/about-us/we-are.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function WeAre() {
    useEffect(() => {
      AOS.init({ duration: "1500", once: true });
    }, []);
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex flex-col md:flex-row items-center xl:gap-[70px] gap-[50px]">
        {/* left */}
        <div className="md:w-[45%]">
          <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
            Who we are
          </span>
          <h2 className="sm:text-[36px] text-[28px] font-[600] text-secondary section-title mt-[15px] mb-[12px]">
            The Leading Global <span className="text-primary">Marketplace</span>{" "}
            For Learning And Instruction
          </h2>
          <p className="text-[15px] text-secondary font-[400] mb-[14px]">
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe ellus
            luctus nec ullamcorper mattis.
          </p>
          <p className="text-[15px] text-neutral font-[300] mb-[14px]">
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe awut elit
            ellus, luctus nec ullamcorper mattis. Borem ipsum dolor awes atnse
            awctetur.
          </p>
          <button className="flex items-center justify-center gap-2 bg-primary text-white py-[14px] sm:px-[32px] px-[25px] rounded-[6px] hover:bg-secondary transition duration-300">
            Explore Courses <FaArrowRight />
          </button>
        </div>
        {/* right */}
        <div className="md:w-[55%] flex items-center lg:gap-[35px] gap-[20px] relative">
          <div>
            <img className="rounded-[12px]" src={aboutImg1} alt="" />
          </div>
          <div className="flex flex-col lg:gap-[35px] gap-[20px]">
            <img className="rounded-[12px]" src={aboutImg2} alt="" />
            <img className="rounded-[12px]" src={aboutImg3} alt="" />
          </div>
          <img
            data-aos="fade-down-left"
            data-aos-delay="300"
            className="absolute left-[-34px] lg:left-[-60px] bottom-0 lg:w-[130px] w-[80px] z-[-1]"
            src={aboutSpape1}
            alt=""
          />
          <img
            data-aos="fade-up-right"
            data-aos-delay="300"
            className="absolute 2xl:right-[-30px] xl:right-[-20px] md:right-[-16px] right-[-12px] lg:top-[-45px] top-[-25px] 2xl:w-[130px] md:w-[80px] w-[70px] z-[-1]"
            src={aboutSpape2}
            alt=""
          />
          <img
            className="absolute 2xl:right-[-30px] xl:right-[-5px] right-[-3px] lg:bottom-[-45px] bottom-[-30px] 2xl:w-[130px] md:w-[80px] w-[70px] z-[-1] we-are-shape-start"
            src={aboutSpape3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
