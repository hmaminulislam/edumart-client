import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

export default function Hero() {
  const course = useLoaderData()
  const { name, instructorImg, instructorName, lessons, duration, students, info, category } = course;
  return (
    <div className="md:py-[80px] sm:py-[60px] py-[50px] bg-[#041734]">
      <div className="container-main">
        <div className="max-w-[800px]">
          <span className="py-[6px] px-[12px] text-[14px] bg-[#04BC53] text-white rounded-full">
            {category}
          </span>
          <h1 className="text-white font-[600] text-[30px] sm:text-[40px] mt-[20px]">
            {name}
          </h1>
          <p className="text-gray-200 font-[300] mt-[15px]">
            {info.slice(0, 100)}...
                  </p>
                  {/* icons with text all items */}
          <div className="flex items-center flex-wrap gap-[20px] mt-[30px]">
            {/* item */}
            <div className="flex items-center gap-[15px]">
              <img
                className="w-[60px] h-[60px] rounded-full object-contain bg-lime-200"
                src={instructorImg}
                alt=""
              />
              <p className="text-gray-200 font-[300]">{instructorName}</p>
            </div>
            {/* item */}
            <div className="flex items-center gap-[10px]">
              <FaRegFileAlt className="text-white" />
              <p className="text-gray-200 font-[300]">{lessons}</p>
            </div>
            {/* item */}
            <div className="flex items-center gap-[10px]">
              <MdAccessTime className="text-white" />
              <p className="text-gray-200 font-[300]">{duration}</p>
            </div>
            {/* item */}
            <div className="flex items-center gap-[10px]">
              <FiUsers className="text-white" />
              <p className="text-gray-200 font-[300]">{students}</p>
            </div>
            {/* item */}
            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-[4px]">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <p className="text-gray-200 font-[300]">(5.00)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
