import React from "react";
import instructorImg from "../../assets/course-card/author_img.png";
import { FaRegFileAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="md:py-[80px] sm:py-[60px] py-[50px] bg-[#041734]">
      <div className="container-main">
        <div className="max-w-[800px]">
          <span className="py-[6px] px-[12px] text-[14px] bg-[#04BC53] text-white rounded-full">
            Marketing
          </span>
          <h1 className="text-white font-[600] text-[30px] sm:text-[40px] mt-[20px]">
            Bigener Adobe Illustrator for Graphic Design
          </h1>
          <p className="text-gray-200 font-[300] mt-[15px]">
            Learn How To Build The Perfect Diet & Meal Plan For Improved Health,
            Better Weight Loss And…
                  </p>
                  {/* icons with text all items */}
          <div className="flex items-center flex-wrap gap-[20px] mt-[30px]">
            {/* item */}
            <div className="flex items-center gap-[15px]">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src={instructorImg}
                alt=""
              />
              <p className="text-gray-200 font-[300]">Eduvalt</p>
            </div>
            {/* item */}
            <div className="flex items-center gap-[10px]">
              <FaRegFileAlt className="text-white" />
              <p className="text-gray-200 font-[300]">8</p>
            </div>
            {/* item */}
            <div className="flex items-center gap-[10px]">
              <MdAccessTime className="text-white" />
              <p className="text-gray-200 font-[300]">12h 30m</p>
            </div>
            {/* item */}
            <div className="flex items-center gap-[10px]">
              <FiUsers className="text-white" />
              <p className="text-gray-200 font-[300]">60</p>
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
