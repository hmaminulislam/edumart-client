import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../../css/courses/all-courses.css";
import { LuLayoutGrid } from "react-icons/lu";
import { AiOutlineBars } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import CourseCardSmall from "../cards/course-cards/CourseCardSmall";
import { IoFilterSharp, IoCloseSharp } from "react-icons/io5";
import CourseCardLarge from "../cards/course-cards/CourseCardLarge";

export default function AllCourses() {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortName, setSortName] = useState("Newest");
  const [view, setView] = useState(true);
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
  // set sort name 
  const handleSort = (e) => {
    const sortName = e.target.innerText;
    setSortName(sortName)
  };
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top  */}
        <div className="flex flex-row items-center justify-between">
          {/* left  */}
          <div>
            <div className="hidden md:block">
              <div className="flex items-center lg:gap-[30px] gap-[20px]">
                {/* search */}
                <div className="relative py-[20px] px-[10px] flex items-center lg:w-[300px] w-[240px]">
                  <input
                    className="all-course-search-field absolute left-0 top-0 w-full h-full pr-[20px] pl-8 border border-[#cdcfd5] rounded-[4px]"
                    type="text"
                    placeholder="Search"
                  />
                  <IoSearch className="absolute left-[10px]" />
                </div>
                <p className="text-neutral font-[300]">Showing all 9 results</p>
              </div>
            </div>
            <div className="md:hidden">
              {/* Mobile filter sidebar */}
              <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="flex items-center gap-[6px] border-[#d0dae9] border rounded-[4px] py-[10px] px-[14px]"
                  >
                    <IoFilterSharp />
                    <span className="text-secondary text-[14px]">Filter</span>
                  </label>
                </div>
                <div className="drawer-side z-[999]">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="px-4 pb-4 pt-[4rem] w-80 min-h-full bg-white">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="absolute right-[10px] top-[10px]"
                    >
                      <IoCloseSharp className="text-[20px] text-white p-[2px] w-[30px] h-[30px] bg-primary rounded-[2px]" />
                    </label>
                    {/* filter bars  */}
                    <div className="lg:w-[25%] md:w-[28%]">
                      {/* filter item  */}
                      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
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
                            <label
                              htmlFor="business"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="design"
                              className="font-[300] cursor-pointer"
                            >
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
                              htmlFor="development"
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
                            <label
                              htmlFor="health"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="math"
                              className="font-[300] cursor-pointer"
                            >
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
                      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
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
                            <label
                              for="finance"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="project"
                              className="font-[300] cursor-pointer"
                            >
                              Video editor (6)
                            </label>
                          </div>
                          <div className="flex items-center gap-[10px]">
                            <input
                              className="checkbox-filter"
                              type="checkbox"
                              id="graphic"
                              name="graphic"
                            />
                            <label
                              for="graphic"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="ui"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="3d"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="javascript"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="Wordpress"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="PHP"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="Seo"
                              className="font-[300] cursor-pointer"
                            >
                              Seo (1)
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* filter item  */}
                      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
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
                            <label
                              for="Free"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="Paid"
                              className="font-[300] cursor-pointer"
                            >
                              Paid
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* filter item  */}
                      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px]">
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
                            <label
                              for="Beginner"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              for="Expert"
                              className="font-[300] cursor-pointer"
                            >
                              Expert
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                {sortName}
                <FaChevronDown
                  onClick={() => setSortOpen(!sortOpen)}
                  ref={sortBtnEleIcon2}
                  className="text-[14px] mt-[3px]"
                />
              </button>
              {sortOpen && (
                <div ref={sortElement} className="sort-items">
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Oldest
                  </span>
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Price High To Low
                  </span>
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Price Low To High
                  </span>
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Course Title (A-Z)
                  </span>
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Course Title (Z-A)
                  </span>
                </div>
              )}
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={() => setView(true)}
                  className={`w-[40px] h-[40px] p-[10px] flex items-center justify-center rounded-[4px] ${
                    view ? "bg-primary text-white" : "bg-white text-primary border border-primary"
                  }`}
                >
                  <LuLayoutGrid className="text-[25px]" />
                </button>
                <button
                  onClick={() => setView(!view)}
                  className={`w-[40px] h-[40px] p-[10px] flex items-center justify-center rounded-[4px] ${
                    !view ? "bg-primary text-white" : "bg-white text-primary border border-primary"
                  }`}
                >
                  <AiOutlineBars className="text-[25px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* all courses */}
        <div className="flex flex-col md:flex-row gap-[30px] mt-[40px]">
          {/* filter bars  */}
          <div className="lg:w-[25%] md:w-[28%] hidden md:block">
            {/* filter item  */}
            <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
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
                  <label
                    htmlFor="business"
                    className="font-[300] cursor-pointer"
                  >
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
                  <label htmlFor="design" className="font-[300] cursor-pointer">
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
                    htmlFor="development"
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
                  <label htmlFor="health" className="font-[300] cursor-pointer">
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
                  <label htmlFor="math" className="font-[300] cursor-pointer">
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
                    htmlFor="photography"
                    className="font-[300] cursor-pointer"
                  >
                    Photography (3)
                  </label>
                </div>
              </div>
            </div>
            {/* filter item  */}
            <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
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
                  <label
                    htmlFor="finance"
                    className="font-[300] cursor-pointer"
                  >
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
                  <label
                    htmlFor="project"
                    className="font-[300] cursor-pointer"
                  >
                    Video editor (6)
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    className="checkbox-filter"
                    type="checkbox"
                    id="graphic"
                    name="graphic"
                  />
                  <label
                    htmlFor="graphic"
                    className="font-[300] cursor-pointer"
                  >
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
                  <label htmlFor="ui" className="font-[300] cursor-pointer">
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
                  <label htmlFor="3d" className="font-[300] cursor-pointer">
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
                  <label
                    htmlFor="javascript"
                    className="font-[300] cursor-pointer"
                  >
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
                  <label
                    htmlFor="Wordpress"
                    className="font-[300] cursor-pointer"
                  >
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
                  <label htmlFor="PHP" className="font-[300] cursor-pointer">
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
                  <label htmlFor="Seo" className="font-[300] cursor-pointer">
                    Seo (1)
                  </label>
                </div>
              </div>
            </div>
            {/* filter item  */}
            <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
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
                  <label htmlFor="Free" className="font-[300] cursor-pointer">
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
                  <label htmlFor="Paid" className="font-[300] cursor-pointer">
                    Paid
                  </label>
                </div>
              </div>
            </div>
            {/* filter item  */}
            <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px]">
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
                  <label
                    htmlFor="Beginner"
                    className="font-[300] cursor-pointer"
                  >
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
                    htmlFor="Intermediate"
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
                  <label htmlFor="Expert" className="font-[300] cursor-pointer">
                    Expert
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* all course card */}
          {view ? (
            <div className="lg:w-[75%] md:w-[72%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
              {data.map((course, index) => (
                <CourseCardSmall course={course} key={index} />
              ))}
            </div>
          ) : (
            <div className="lg:w-[75%] md:w-[72%] flex flex-col gap-[30px]">
              {data.map((course) => (
                <CourseCardLarge />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// dummy data
const data = [
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
];
