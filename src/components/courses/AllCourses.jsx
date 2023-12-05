import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../../css/courses/all-courses.css";
import { LuLayoutGrid } from "react-icons/lu";
import { AiOutlineBars } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import CourseCardSmall from "../cards/course-cards/CourseCardSmall";
import { IoFilterSharp } from "react-icons/io5";

export default function AllCourses() {
  const [sortOpen, setSortOpen] = useState(false);
  const sortBtn = useRef();
  const sortBtnEleIcon2 = useRef();
  const sortElement = useRef();
  window.addEventListener("click", (e) => {
    if (
      e.target !== sortBtn.current &&
      e.target !== sortElement.current &&
      e.target !== sortBtnEleIcon2.current
    ) {
      setSortOpen(false);
    }
  });
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top  */}
        <div className="flex flex-row sm:flex-col md:flex-row items-center justify-between">
          {/* left  */}
          <div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-[50px]">
                {/* search */}
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
            </div>
            <div className="flex items-center gap-[6px] border-[#d0dae9] border rounded-[4px] py-[10px] px-[14px]">
              <IoFilterSharp className="block sm:hidden" />
              <span className="text-secondary text-[14px]">Filter</span>
            </div>
          </div>
          {/* right  */}
          <div className="flex items-center gap-[10px]">
            <div className={`relative border-[#d0dae9] border rounded-[4px]`}>
              <button
                ref={sortBtn}
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-[8px] justify-between py-[10px] px-[14px] cursor-pointer sm:w-[200px] w-[180px] text-secondary text-[14px]"
              >
                Newest
                <FaChevronDown
                  onClick={() => setSortOpen(!sortOpen)}
                  ref={sortBtnEleIcon2}
                  className="text-[14px] mt-[3px]"
                />
              </button>
              {sortOpen && (
                <div ref={sortElement} className="sort-items">
                  <span className="text-secondary text-[14px] sort-item">
                    Oldest
                  </span>
                  <span className="text-secondary text-[14px] sort-item">
                    Price High To Low
                  </span>
                  <span className="text-secondary text-[14px] sort-item">
                    Price Low To High
                  </span>
                  <span className="text-secondary text-[14px] sort-item">
                    Course Title (A-Z)
                  </span>
                  <span className="text-secondary text-[14px] sort-item">
                    Course Title (Z-A)
                  </span>
                </div>
              )}
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
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
        {/* all courses */}
        <div className="flex flex-col md:flex-row gap-[30px] mt-[40px]">
          {/* filter bars  */}
          <div className="md:w-[25%]">
            {/* filter item  */}
            <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] mb-[30px]">
              <h4 className="text-[20px] text-secondary filter-title-underline">
                Faculties
              </h4>
              <div className="flex flex-col gap-[12px] mt-[30px]">
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="business"
                    name="business"
                  />
                  <label for="business" className="font-[300] cursor-pointer">
                    Business (5)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="design"
                    name="design"
                  />
                  <label for="design" className="font-[300] cursor-pointer">
                    Design (6)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="development"
                    name="development"
                  />
                  <label
                    for="development"
                    className="font-[300] cursor-pointer"
                  >
                    Development (9)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="health"
                    name="health"
                  />
                  <label for="health" className="font-[300] cursor-pointer">
                    Health & Fitness (6)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="math"
                    name="math"
                  />
                  <label for="math" className="font-[300] cursor-pointer">
                    Math (4)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="photography"
                    name="photography"
                  />
                  <label
                    for="photography"
                    className="font-[300] cursor-pointer"
                  >
                    Photography (3)
                  </label>
                </div>
              </div>
            </div>
            {/* filter item  */}
            <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] mb-[30px]">
              <h4 className="text-[20px] text-secondary filter-title-underline">
                Departments
              </h4>
              <div className="flex flex-col gap-[12px] mt-[30px]">
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="finance"
                    name="finance"
                  />
                  <label for="finance" className="font-[300] cursor-pointer">
                    Finance (5)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="project"
                    name="project"
                  />
                  <label for="project" className="font-[300] cursor-pointer">
                    Project management (6)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="graphic"
                    name="graphic"
                  />
                  <label for="graphic" className="font-[300] cursor-pointer">
                    Graphic design (9)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="ui"
                    name="ui"
                  />
                  <label for="ui" className="font-[300] cursor-pointer">
                    UI/UX design (6)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="3d"
                    name="3d"
                  />
                  <label for="3d" className="font-[300] cursor-pointer">
                    3D animation (4)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="javascript"
                    name="javascript"
                  />
                  <label for="javascript" className="font-[300] cursor-pointer">
                    Javascript (3)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="Wordpress"
                    name="Wordpress"
                  />
                  <label for="Wordpress" className="font-[300] cursor-pointer">
                    Wordpress (3)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="PHP"
                    name="PHP"
                  />
                  <label for="PHP" className="font-[300] cursor-pointer">
                    PHP (2)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="Seo"
                    name="Seo"
                  />
                  <label for="Seo" className="font-[300] cursor-pointer">
                    Seo (1)
                  </label>
                </div>
              </div>
            </div>
            {/* filter item  */}
            <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] mb-[30px]">
              <h4 className="text-[20px] text-secondary filter-title-underline">
                Prices
              </h4>
              <div className="flex flex-col gap-[12px] mt-[30px]">
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="Free"
                    name="Free"
                  />
                  <label for="Free" className="font-[300] cursor-pointer">
                    Free
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="Paid"
                    name="Paid"
                  />
                  <label for="Paid" className="font-[300] cursor-pointer">
                    Paid
                  </label>
                </div>
              </div>
            </div>
            {/* filter item  */}
            <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px]">
              <h4 className="text-[20px] text-secondary filter-title-underline">
                Levels
              </h4>
              <div className="flex flex-col gap-[12px] mt-[30px]">
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="Beginner"
                    name="Beginner"
                  />
                  <label for="Beginner" className="font-[300] cursor-pointer">
                    Beginner
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="Intermediate"
                    name="Intermediate"
                  />
                  <label
                    for="Intermediate"
                    className="font-[300] cursor-pointer"
                  >
                    Intermediate
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="Expert"
                    name="Expert"
                  />
                  <label for="Expert" className="font-[300] cursor-pointer">
                    Expert
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* all course card */}
          <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {data.map((course, index) => (
              <CourseCardSmall course={course} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// dummy data 
const data = [
  {name: "1"},
  {name: "1"},
  {name: "1"},
  {name: "1"},
  {name: "1"},
  {name: "1"},
  {name: "1"},
  {name: "1"},
  {name: "1"},
]