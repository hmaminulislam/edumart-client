import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../../css/courses/all-courses.css";
import { LuLayoutGrid } from "react-icons/lu";
import { AiOutlineBars } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function AllCourses() {
  const [sortOpen, setSortOpen] = useState(false);
  const sortBtn = useRef();
  const sortBtnEleIcon2 = useRef();
  const sortBtnEleIcon3 = useRef();
  const sortElement = useRef();
  window.addEventListener("click", (e) => {
    if (
      e.target !== sortBtn.current &&
      e.target !== sortElement.current &&
      e.target !== sortBtnEleIcon3.current &&
      e.target !== sortBtnEleIcon2.current
    ) {
      setSortOpen(false);
    }
  });
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top  */}
        <div className="flex items-center justify-between">
          {/* left  */}
          <div className="flex items-center gap-[50px]">
            <div className="relative py-[20px] px-[10px] flex items-center w-[300px]">
              <input
                className="all-course-search-field absolute left-0 top-0 w-full h-full px-[20px] border border-[#cdcfd5] rounded-[4px]"
                type="text"
                placeholder="Search"
              />
              <IoSearch className="text-red absolute left-[10px]" />
            </div>
            <p className="text-neutral font-[300]">Showing all 9 results</p>
          </div>
          {/* right  */}
          <div className="flex items-center gap-[40px]">
            <div className={`relative border-[#d0dae9] border rounded-[4px]`}>
              <button
                ref={sortBtn}
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-[8px] justify-between py-[10px] px-[14px] cursor-pointer w-[200px] text-secondary text-[14px]"
              >Newest

                {sortOpen ? (
                  <FaChevronUp
                    onClick={() => setSortOpen(!sortOpen)}
                    ref={sortBtnEleIcon3}
                    className="text-[14px] mt-[3px]"
                  />
                ) : (
                  <FaChevronDown
                    onClick={() => setSortOpen(!sortOpen)}
                    ref={sortBtnEleIcon2}
                    className="text-[14px] mt-[3px]"
                  />
                )}
              </button>
              {sortOpen && <div ref={sortElement} className="sort-items">
                  <span className="text-secondary font-[300] sort-item">
                    Oldest
                  </span>
                  <span className="text-secondary font-[300] sort-item">
                    Price High To Low
                  </span>
                  <span className="text-secondary font-[300] sort-item">
                    Price Low To High
                  </span>
                  <span className="text-secondary font-[300] sort-item">
                    Course Title (A-Z)
                  </span>
                  <span className="text-secondary font-[300] sort-item">
                    Course Title (Z-A)
                  </span>
                </div>}
            </div>
            <div className="flex items-center gap-[20px]">
              <button className="w-[40px] h-[40px] bg-primary text-white p-[10px] flex items-center justify-center rounded-[4px]">
                <LuLayoutGrid className="text-[25px]" />
              </button>
              <button className="w-[40px] h-[40px] bg-primary text-white p-[10px] flex items-center justify-center rounded-[4px]">
                <AiOutlineBars className="text-[25px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
