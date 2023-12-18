import React, { useRef, useState } from "react";
import "../../css/courses/all-courses.css";
import CourseCardSmall from "../cards/course-cards/CourseCardSmall";
import CourseCardLarge from "../cards/course-cards/CourseCardLarge";
import { useGetCoursesQuery } from "../../redux/api/api";
import CourseTopbar from "./CourseTopbar";
import { useDispatch, useSelector } from "react-redux";
import { courseDataSet } from "../../redux/features/course/courseSlice";

export default function AllCourses() {


  // data load api redux 
  const { data, isLoading, error } = useGetCoursesQuery(undefined);

    const dispatch = useDispatch();
  // data set course redux 
  if (data) {
    dispatch(courseDataSet(data.courses))
  }

  const {courseData} = useSelector((state) => state.course)


  // courses layout view state 
  const {view} = useSelector((state) => state.course);
  
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top with mobile sidebar  */}
        <CourseTopbar />
        {/* all courses */}
        <div className="flex flex-col md:flex-row gap-[30px] mt-[40px]">
          {/* filter bars  */}
          <div className="lg:w-[25%] md:w-[28%] hidden md:block">
            {/* filter item  */}
            <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
              <h4 className="text-[20px] text-secondary filter-title-underline">
                Categories
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
                    Health & Fitness (0)
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
                    Programming (4)
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
                    Math (0)
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
          {data && (
            <>
              {view ? (
                <div className="lg:w-[75%] md:w-[72%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
                  {data &&
                    courseData
                      .slice(0, 9)
                      .map((course, index) => (
                        <CourseCardSmall course={course} key={course._id} />
                      ))}
                </div>
              ) : (
                <div className="lg:w-[75%] md:w-[72%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px] lg:gap-[30px]">
                  {data.courses.slice(0, 9).map((course) => (
                    <CourseCardLarge course={course} key={course._id} />
                  ))}
                </div>
              )}
            </>
          )}
          {/* loading element */}
          {isLoading && (
            <div className="lg:w-[75%] md:w-[72%] flex flex-col items-center mt-[40px] md:mt-[100px]">
              <span className="loading text-primary loading-dots loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
