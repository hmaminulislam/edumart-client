import React from "react";
import { FiFileText, FiUsers } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import '../../css/card/course-card.css'
import {motion} from 'framer-motion'

export default function CourseCard({ course }) {
  const { name, img, lessons, duration, category, curriculam, info, instructorDetails, instructorName, instructorImg, language, lastUpdate, level, price, progmams, students, _id } =
    course;
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="course-card flex flex-col justify-between"
    >
      {/* top  */}
      <div className="relative">
        <Link to={`/course/${_id}`}>
          <img
            className="course-card-img h-[265px] object-cover w-[100%]"
            src={img}
            alt=""
          />
        </Link>
        <span className="absolute left-[20px] top-[20px] bg-secondary text-white font-[300] py-[4px] px-[14px] rounded-full text-[14px]">
          {category}
        </span>
      </div>
      {/* content  */}
      <div className="sm:px-[20px] px-[14px] pt-[20px] h-[100%] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-[10px] mb-[14px]">
            <div className="flex items-center gap-[4px] sm:gap-[6px]">
              <FiFileText className="text-[16px]" />
              <span className="sm:text-[14px] text-[12px] font-[300]">
                {`${lessons} Lessons`}
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
          <Link
            to={`/course/${_id}`}
            className="text-[20px] text-neutral text-link-underline"
          >
            {name}
          </Link>
          <div className="flex items-center gap-[5px] pb-[20px] pt-[14px]">
            <div className="flex items-center gap-[2px]">
              <FaStar className="text-yellow-500 text-[18px]" />
              <FaStar className="text-yellow-500 text-[18px]" />
              <FaStar className="text-yellow-500 text-[18px]" />
              <FaStar className="text-yellow-500 text-[18px]" />
              <FaStar className="text-yellow-500 text-[18px]" />
            </div>
            <span className="font-[300]">(4)</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[20px] border-t border-[#eeeeee]">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[50px] h-[50px] object-contain rounded-full p-[2px] bg-lime-200"
              src={instructorImg}
              alt=""
            />
            <span className="text-secondary font-[300]">{instructorName}</span>
          </div>
          <p className="text-[20px] font-[500] text-primary">{`$${price}`}</p>
        </div>
      </div>
    </motion.div>
  );
}
