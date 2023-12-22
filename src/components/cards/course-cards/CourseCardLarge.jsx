import React from "react";
import courseImg from "../../../assets/course-card/courses01.jpg";
import courseImgUser from "../../../assets/course-card/author_img.png";
import { Link } from "react-router-dom";
import { FiFileText, FiUsers } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

export default function CourseCardLarge({ course }) {
  const {
    name,
    img,
    lessons,
    duration,
    instructorImg,
    price,
    students,
    category,
    _id,
  } = course;
  return (
    <div className="flex flex-col md:flex-row lg:items-center gap-[30px] p-[8px] md:p-[10px] lg:p-[14px] border border-[#E8E8E8] rounded-[6px]">
      <Link to={`/course/${_id}`} className="lg:w-[35%] md:w-[40%]">
        <img className="rounded-[5px] h-[100%] object-cover" src={img} alt="" />
      </Link>
      <div className="lg:w-[65%] md:w-[60%] px-[5px] lg:px-0">
        <div className="mb-[10px]">
          <span className="py-[4px] px-[10px] text-[14px] bg-[#E8F9EF] inline-block rounded-full">
            {category}
          </span>
        </div>
        <Link
          to={`/course/${_id}`}
          className="lg:text-[24px] text-[17px] text-secondary font-[500] mt-[14px] text-link-underline"
        >
          {name}
        </Link>
        <div className="flex items-center flex-wrap gap-[14px] my-[14px]">
          <div className="flex items-center gap-[4px] sm:gap-[6px]">
            <FiFileText className="text-[16px]" />
            <span className="sm:text-[14px] text-[12px] font-[300]">
              {lessons}
            </span>
          </div>
          <div className="flex items-center gap-[4px] sm:gap-[6px]">
            <MdAccessTime className="text-[17px]" />
            <span className="sm:text-[14px] text-[12px] font-[300]">
              {duration}
            </span>
          </div>
          <div className="flex items-center gap-[4px] sm:gap-[6px]">
            <FiUsers className="text-[16px]" />
            <span className="sm:text-[14px] text-[12px] font-[300]">
             {students} Students
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
          <img
            className="w-[50px] h-[50px] rounded-full object-contain bg-lime-200 p-[2px]"
            src={instructorImg}
            alt=""
          />
          <p className="text-[20px] font-[500] text-primary">${price}</p>
        </div>
      </div>
    </div>
  );
}
