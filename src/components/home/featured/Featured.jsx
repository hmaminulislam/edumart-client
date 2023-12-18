import React, { useState } from 'react'
import CourseCard from '../../course-card/CourseCard';
import { useGetCoursesQuery } from '../../../redux/api/api';
import {motion, AnimatePresence} from 'framer-motion'

export default function Featured() {

  const [currentCat, setCurrentCat] = useState()
  const { data, isLoading, error } = useGetCoursesQuery(undefined)

  let coursesData;

  if (currentCat) {
    if (currentCat === undefined) {
      coursesData = data.courses;
    } else {
      const cateCourses = data.courses.filter(
        (course) => course.category === currentCat
      );
      coursesData = cateCourses;
    }
  } else {
    coursesData = data?.courses;
  }

  return (
    <div className="bg-[#F4F7FB] 2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top  */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[16px]">
          {/* left  */}
          <div className="text-center lg:text-left">
            <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
              Welcome our Property.
            </span>
            <h2 className="sm:text-[36px] text-[28px] font-[600] text-secondary section-title mt-[15px] mb-[12px]">
              Our
              <span className="text-primary"> Featured</span> Courses
            </h2>
          </div>
          {/* right  */}
          <div className="flex flex-wrap items-center lg:justify-end justify-center lg:gap-[24px] gap-x-[20px] gap-y-[16px] lg:mb-[20px]">
            <button
              className={`${
                currentCat === undefined ? "text-primary" : "text-secondary"
              }`}
              onClick={() => setCurrentCat(undefined)}
            >
              All Courses
            </button>
            <button
              className={`${
                currentCat === "Business" ? "text-primary" : "text-secondary"
              }`}
              onClick={() => setCurrentCat("Business")}
            >
              Business
            </button>
            <button
              className={`${
                currentCat === "Design" ? "text-primary" : "text-secondary"
              }`}
              onClick={() => setCurrentCat("Design")}
            >
              Design
            </button>
            <button
              className={`${
                currentCat === "Development" ? "text-primary" : "text-secondary"
              }`}
              onClick={() => setCurrentCat("Development")}
            >
              Development
            </button>
            <button
              className={`${
                currentCat === "Programming" ? "text-primary" : "text-secondary"
              }`}
              onClick={() => setCurrentCat("Programming")}
            >
              Programming
            </button>
          </div>
        </div>
        {/* couse card contents */}
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-[40px]"
        >
          <AnimatePresence>
            {data &&
              coursesData
                ?.slice(0, 6)
                .map((course) => (
                  <CourseCard key={course._id} course={course} />
                ))}
          </AnimatePresence>
        </div>
        {/* loading element */}
        {isLoading && (
          <div className="lg:w-[75%] md:w-[72%] flex justify-center items-center mt-[40px] md:mt-[100px]">
            <span className="loading text-primary loading-dots loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
}