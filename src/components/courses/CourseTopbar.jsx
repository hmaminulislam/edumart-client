import React, { useRef, useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa6';
import { IoCloseSharp, IoFilterSharp, IoSearch } from 'react-icons/io5';
import { LuLayoutGrid } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { courseViewChange } from '../../redux/features/course/courseSlice';
import SidebarFilter from './sidebar-filter/SidebarFilter';
import SidebarFilterMob from './sidebar-filter/SidebarFilterMob';

export default function CourseTopbar({ currentCourses }) {
  const dispatch = useDispatch();

  // courses layout view state
  const { view } = useSelector((state) => state.course);

  const [sortName, setSortName] = useState("Newest");
  const [sortOpen, setSortOpen] = useState(false);

  // sort element dom select
  const sortBtn = useRef();
  const sortBtnEleIcon2 = useRef();
  const sortElement = useRef();

  // other site click sort dropdown close
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
    setSortName(sortName);
  };

  return (
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
            <p className="text-neutral font-[300]">Showing all {currentCourses ? currentCourses : 0} results</p>
          </div>
        </div>
        <div className="md:hidden">
          {/* Mobile filter sidebar */}
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* mobile filter icon */}
              <label
                htmlFor="my-drawer"
                className="flex items-center gap-[6px] border-[#d0dae9] border rounded-[4px] py-[10px] px-[14px]"
              >
                <IoFilterSharp />
                <span className="text-secondary text-[14px]">Filter</span>
              </label>
            </div>
            {/* mobile sidebar drawr content  */}
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
                <SidebarFilterMob />
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
                Newest
              </span>
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
              onClick={() => dispatch(courseViewChange(true))}
              className={`w-[40px] h-[40px] p-[10px] flex items-center justify-center rounded-[4px] ${
                view
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary"
              }`}
            >
              <LuLayoutGrid className="text-[25px]" />
            </button>
            <button
              onClick={() => dispatch(courseViewChange(false))}
              className={`w-[40px] h-[40px] p-[10px] flex items-center justify-center rounded-[4px] ${
                !view
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary"
              }`}
            >
              <AiOutlineBars className="text-[25px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
