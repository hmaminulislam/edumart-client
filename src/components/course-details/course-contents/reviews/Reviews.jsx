import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import reviewImg from '../../../../assets/course-details/review_01.webp'

export default function Reviews() {
  return (
    <div className="mt-[40px]">
      <h3 className="text-[20px] text-secondary font-[500]">
        Student Ratings & Reviews
      </h3>
      {/* rating calculation card  */}
      <div className="bg-[#F3F4F7] mt-[25px] p-[30px] border border-[#dae0e7] rounded-[8px] flex flex-col sm:flex-row items-center sm:gap-[35px] gap-[20px]">
        {/* rating left  */}
        <div className="text-center py-[20px] px-[30px] bg-white border border-[#E6EAEF] rounded-[6px]">
          <h2 className="text-[58px] text-secondary font-[600]">4.0</h2>
          <div className="flex items-center gap-[5px]">
            <FaStar className="text-yellow-500 text-[20px]" />
            <FaStar className="text-yellow-500 text-[20px]" />
            <FaStar className="text-yellow-500 text-[20px]" />
            <FaStar className="text-yellow-500 text-[20px]" />
            <FaRegStar className="text-yellow-500 text-[20px]" />
          </div>
          <p className="text-secondary font-[300] mt-[10px]">Total 2 Ratings</p>
        </div>
        {/* rating right */}
        <div className="sm:w-[75%] w-[95%] flex flex-col gap-[10px]">
          {/* progress item  */}
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[6px]">
              <p className="text-secondary text-[18px] mt-[2px]">5</p>
              <FaStar className="text-yellow-500 text-[20px]" />
            </div>
            <div className="bar w-[90%] h-[6px] bg-[#e3e5eb] rounded-[50px] relative">
              <span className="absolute left-0 top-0 bg-yellow-500 w-[50%] z-[2] h-[100%] rounded-[50px]"></span>
            </div>
            <p className="text-secondary text-[18px]">1</p>
          </div>
          {/* progress item  */}
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[6px]">
              <p className="text-secondary text-[18px] mt-[2px]">4</p>
              <FaStar className="text-yellow-500 text-[20px]" />
            </div>
            <div className="bar w-[90%] h-[6px] bg-[#e3e5eb] rounded-[50px] relative">
              <span className="absolute left-0 top-0 bg-yellow-500 w-[0%] z-[2] h-[100%] rounded-[50px]"></span>
            </div>
            <p className="text-secondary text-[18px]">0</p>
          </div>
          {/* progress item  */}
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[6px]">
              <p className="text-secondary text-[18px] mt-[2px]">3</p>
              <FaStar className="text-yellow-500 text-[20px]" />
            </div>
            <div className="bar w-[90%] h-[6px] bg-[#e3e5eb] rounded-[50px] relative">
              <span className="absolute left-0 top-0 bg-yellow-500 w-[50%] z-[2] h-[100%] rounded-[50px]"></span>
            </div>
            <p className="text-secondary text-[18px]">1</p>
          </div>
          {/* progress item  */}
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[6px]">
              <p className="text-secondary text-[18px] mt-[2px]">2</p>
              <FaStar className="text-yellow-500 text-[20px]" />
            </div>
            <div className="bar w-[90%] h-[6px] bg-[#e3e5eb] rounded-[50px] relative">
              <span className="absolute left-0 top-0 bg-yellow-500 w-[0%] z-[2] h-[100%] rounded-[50px]"></span>
            </div>
            <p className="text-secondary text-[18px]">0</p>
          </div>
          {/* progress item  */}
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[6px]">
              <p className="text-secondary text-[18px] mt-[2px]">1</p>
              <FaStar className="text-yellow-500 text-[20px]" />
            </div>
            <div className="bar w-[90%] h-[6px] bg-[#e3e5eb] rounded-[50px] relative">
              <span className="absolute left-0 top-0 bg-yellow-500 w-[0%] z-[2] h-[100%] rounded-[50px]"></span>
            </div>
            <p className="text-secondary text-[18px]">0</p>
          </div>
        </div>
      </div>
      {/* reviews all cards */}
      <div className="mt-[30px]">
        {/* riview card  */}
        <div className="bg-white p-[30px] border border-[#dae0e7] rounded-[8px] flex flex-col sm:flex-row sm:items-center sm:gap-[35px] gap-[20px]">
          <div>
            <img
              className="w-[70px] h-[70px] rounded-full object-cover"
              src={reviewImg}
              alt=""
            />
            <p className="text-secondary font-[300] mt-[10px]">5 years ago</p>
          </div>
          <div className="sm:w-[80%]">
            <div className="flex items-center gap-[5px]">
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaStar className="text-yellow-500 text-[20px]" />
              <FaRegStar className="text-yellow-500 text-[20px]" />
            </div>
            <p className="text-secondary font-[300] mt-[12px]">
              Very good course, great structure, really easy to follow. Have
              gone back and forth many times to check on some issues arising on
              my site. Also very handy to see what kind of plugins are available
              to serve different purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
