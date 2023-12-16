import React from "react";
import courseImg from "../../../assets/courses/courses10.jpg";
import instructorImgo from "../../../assets/course-card/author_img.png";
import { Link } from "react-router-dom";
import { FiFileText, FiUsers } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

export default function CourseCardSmall({ course }) {
  const {
    name,
    img,
    lessons,
    duration,
    Requirements,
    curriculam,
    enrolled,
    info,
    instructorDetails,
    instructorName,
    instructorImg,
    language,
    lastUpdate,
    level,
    price,
    progmams,
    students,
    _id,
  } = course;
  return (
    <div className="p-[10px] border border-[#E8E8E8] rounded-[6px]">
      <div className="relative">
        <Link to={`/course/${_id}`}>
          <img className="rounded-[4px]" src={img} alt="" />
        </Link>
        <img
          className="absolute right-[15px] bottom-[-25px] h-[60px] w-[60px] object-contain border-[4px] border-white rounded-full"
          src={instructorImg}
          alt=""
        />
      </div>
      <div className="mt-[25px]">
        <div className="mb-[4px]">
          <p className="py-[4px] px-[10px] text-[14px] bg-[#E8F9EF] inline-block rounded-full">
            Marketing
          </p>
        </div>
        <Link
          to={`/course/${_id}`}
          className="text-[17px] text-secondary font-[500] mt-[14px] text-link-underline"
        >
          {name}
        </Link>
        <div className="flex items-center gap-[14px] my-[14px]">
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
              {`${students} Students`}
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#d7dce3]"></div>
        <div className="flex items-center justify-between mt-[10px]">
          <p className="text-[20px] font-[500] text-primary">{`$${price}`}</p>
          <div className="flex items-center gap-[5px]">
            <TiStarFullOutline className="text-yellow-500 text-[22px]" />
            <span className="font-[300]">(4.15)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
