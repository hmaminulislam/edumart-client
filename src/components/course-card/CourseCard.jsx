import React from "react";
import { FiFileText, FiUsers } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import courseImg from "../../assets/course-card/courses01.jpg";
import authorImg from "../../assets/course-card/author_img.png";
import '../../css/course-card.css'

export default function CourseCard() {
  return (
    <div className="course-card">
      {/* top  */}
      <div className="relative">
        <img className="course-card-img" src={courseImg} alt="" />
        <span className="absolute left-[20px] top-[20px] bg-secondary text-white font-[300] py-[4px] px-[14px] rounded-full text-[14px]">
          Marketing
        </span>
      </div>
      {/* content  */}
      <div className="sm:px-[20px] px-[14px] pt-[20px]">
        <div className="flex items-center justify-between gap-[10px] mb-[14px]">
          <div className="flex items-center gap-[4px] sm:gap-[6px]">
            <FiFileText className="text-[16px]" />
            <span className="sm:text-[14px] text-[12px] font-[300]">
              6 Lessons
            </span>
          </div>
          <div className="flex items-center gap-[4px] sm:gap-[6px]">
            <MdAccessTime className="text-[17px]" />
            <span className="sm:text-[14px] text-[12px] font-[300]">
              12h 30m
            </span>
          </div>
          <div className="flex items-center gap-[4px] sm:gap-[6px]">
            <FiUsers className="text-[16px]" />
            <span className="sm:text-[14px] text-[12px] font-[300]">
              58 Students
            </span>
          </div>
        </div>
        <Link className="text-[20px] sm:text-[22px] text-black">
          Bigener Adobe Illustrator for Graphic Design
        </Link>
        <div className="flex items-center gap-[5px] border-b border-[#eeeeee] pb-[20px] pt-[14px]">
          <div className="flex items-center gap-[2px]">
            <FaStar className="text-yellow-500 text-[18px]" />
            <FaStar className="text-yellow-500 text-[18px]" />
            <FaStar className="text-yellow-500 text-[18px]" />
            <FaStar className="text-yellow-500 text-[18px]" />
            <FaStar className="text-yellow-500 text-[18px]" />
          </div>
          <span className="font-[300]">(4)</span>
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[20px]">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={authorImg}
              alt=""
            />
            <span className="text-secondary font-[300]">Tom Jesof</span>
          </div>
          <p className="text-[20px] font-[500] text-primary">Free</p>
        </div>
      </div>
    </div>
  );
}
