import React from "react";
import instuctorImg1 from "../../assets/instructors/instructor01.png";
import instuctorImg2 from "../../assets/instructors/instructor02.png";
import instuctorImg3 from "../../assets/instructors/instructor03.png";
import instuctorImg4 from "../../assets/instructors/instructor04.png";
import "../../css/top-instructor.css";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaArrowRight,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TopInstructor() {
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top  */}
        <div className="flex flex-col md:flex-row md:items-center gap-[30px] justify-between">
          <div>
            <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
              Our Qualified People Matter
            </span>
            <h2 className="sm:text-[38px] text-[28px] font-[700] text-secondary section-title mt-[15px] mb-[12px]">
              Top <span className="text-primary">Class</span> Instructor
            </h2>
          </div>
          <div>
            <button className="flex items-center justify-center gap-2 bg-white text-primary border border-primary py-[13px] sm:px-[32px] px-[24px] rounded-[6px] hover:bg-primary hover:text-white transition duration-300">
              All Instructors <FaArrowRight />
            </button>
          </div>
        </div>
        {/* instructors content  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[50px]">
          {/* instructor item */}
          <div>
            <div className="bg-[#E2FAFF] instructor-img-wrap">
              <img src={instuctorImg1} alt="" />
            </div>
            <div className="flex items-center justify-between pt-[20px] px-[10px]">
              <div>
                <p className="text-neutral font-[300]">Web Developer</p>
                <h4 className="text-secondary text-[22px] font-[500]">
                  Robert Smith
                </h4>
              </div>
              <div className="relative instructor-social-share-icon">
                <IoShareSocialOutline className="w-[42px] h-[42px] bg-[#e7effc] text-primary rounded-full p-[10px] cursor-pointer hover:bg-primary hover:text-white duration-300 transition" />
                <div className="absolute flex flex-col gap-[8px] instructor-social-icons">
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-1">
                    <FaFacebookF />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-2">
                    <FaTwitter />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-3">
                    <FaInstagram />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-4">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* instructor item */}
          <div>
            <div className="bg-[#E4FFE2] instructor-img-wrap">
              <img src={instuctorImg2} alt="" />
            </div>
            <div className="flex items-center justify-between pt-[20px] px-[10px]">
              <div>
                <p className="text-neutral font-[300]">Web Developer</p>
                <h4 className="text-secondary text-[22px] font-[500]">
                  Robert Smith
                </h4>
              </div>
              <div className="relative instructor-social-share-icon">
                <IoShareSocialOutline className="w-[42px] h-[42px] bg-[#e7effc] text-primary rounded-full p-[10px] cursor-pointer hover:bg-primary hover:text-white duration-300 transition" />
                <div className="absolute flex flex-col gap-[8px] instructor-social-icons">
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-1">
                    <FaFacebookF />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-2">
                    <FaTwitter />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-3">
                    <FaInstagram />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-4">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* instructor item */}
          <div>
            <div className="bg-[#E8EDFF] instructor-img-wrap">
              <img src={instuctorImg3} alt="" />
            </div>
            <div className="flex items-center justify-between pt-[20px] px-[10px]">
              <div>
                <p className="text-neutral font-[300]">Web Developer</p>
                <h4 className="text-secondary text-[22px] font-[500]">
                  Robert Smith
                </h4>
              </div>
              <div className="relative instructor-social-share-icon">
                <IoShareSocialOutline className="w-[42px] h-[42px] bg-[#e7effc] text-primary rounded-full p-[10px] cursor-pointer hover:bg-primary hover:text-white duration-300 transition" />
                <div className="absolute flex flex-col gap-[8px] instructor-social-icons">
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-1">
                    <FaFacebookF />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-2">
                    <FaTwitter />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-3">
                    <FaInstagram />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-4">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* instructor item */}
          <div>
            <div className="bg-[#FFE2E2] instructor-img-wrap">
              <img src={instuctorImg4} alt="" />
            </div>
            <div className="flex items-center justify-between pt-[20px] px-[10px]">
              <div>
                <p className="text-neutral font-[300]">Web Developer</p>
                <h4 className="text-secondary text-[22px] font-[500]">
                  Robert Smith
                </h4>
              </div>
              <div className="relative instructor-social-share-icon">
                <IoShareSocialOutline className="w-[42px] h-[42px] bg-[#e7effc] text-primary rounded-full p-[10px] cursor-pointer hover:bg-primary hover:text-white duration-300 transition" />
                <div className="absolute flex flex-col gap-[8px] instructor-social-icons">
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-1">
                    <FaFacebookF />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-2">
                    <FaTwitter />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-3">
                    <FaInstagram />
                  </Link>
                  <Link className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition instructor-social-icon-4">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
