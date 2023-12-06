import React from "react";
import courseImg from "../../../assets/course-card/courses01.jpg";
import courseImgUser from "../../../assets/course-card/author_img.png";
import { Link } from "react-router-dom";
import { FiFileText, FiUsers } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

export default function CourseCardLarge() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-[30px] p-[14px] border border-[#E8E8E8] rounded-[6px]">
      <div className="sm:w-[35%]">
        <img className="rounded-[5px]" src={courseImg} alt="" />
      </div>
      <div className="sm:w-[65%]">
        <span className="py-[4px] px-[10px] text-[14px] bg-[#E8F9EF] rounded-full">
          Marketing
        </span>
        <Link className="sm:text-[24px] text-[17px] text-secondary font-[500] block mt-[14px]">
          Bigener Adobe Illustrator for Graphic Design
        </Link>
        <div className="flex items-center gap-[14px] my-[14px]">
          <div className="flex items-center gap-[4px] sm:gap-[6px]">
            <FiFileText className="text-[16px]" />
            <span className="sm:text-[14px] text-[12px] font-[300]">6</span>
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
          <div className="flex items-center gap-[4px] sm:gap-[6px]">
            <TiStarFullOutline className="text-yellow-500 text-[18px]" />
            <span className="sm:text-[14px] text-[12px] font-[300]">
              (4.15)
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#d7dce3]"></div>
              <div className="flex items-center justify-between mt-[10px]">
                  <img className="w-[50px] h-[50px] rounded-full" src={courseImgUser} alt="" />
          <p className="text-[20px] font-[500] text-primary">Free</p>
        </div>
      </div>
    </div>
  );
}
