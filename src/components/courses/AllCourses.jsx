import React, { useState } from "react";
import "../../css/courses/all-courses.css";
import CourseCardSmall from "../cards/course-cards/CourseCardSmall";
import CourseCardLarge from "../cards/course-cards/CourseCardLarge";
import { useGetCoursesQuery } from "../../redux/api/api";
import CourseTopbar from "./CourseTopbar";
import { useSelector } from "react-redux";
import SidebarFilter from "./sidebar-filter/SidebarFilter";
import Pagination from "../common/pagination/Pagination";

export default function AllCourses() {

  // data load api redux
  const { data, isLoading, error } = useGetCoursesQuery(undefined);

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [coursePerPage, SetCoursePerPage] = useState(9)

  const lastCourseIndex = currentPage * coursePerPage;
  const firstCourseIndex = lastCourseIndex - coursePerPage;
  const currentCourses = data?.courses?.slice(firstCourseIndex, lastCourseIndex)

  console.log(currentCourses)


  // courses layout view state 
  const { view } = useSelector((state) => state.course);
  
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top with mobile sidebar  */}
        <CourseTopbar currentCourses={currentCourses?.length} />
        {/* all courses */}
        <div className="flex flex-col md:flex-row gap-[30px] mt-[40px]">
          {/* filter bars  */}
          <div className="lg:w-[25%] md:w-[28%] hidden md:block">
            <SidebarFilter />
          </div>
          {/* all course card */}
          {data && (
            <>
              {view ? (
                <div className="lg:w-[75%] md:w-[72%] flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
                    {currentCourses?.map((course, index) => (
                      <CourseCardSmall course={course} key={course._id} />
                    ))}
                  </div>
                  <Pagination
                    totalCourses={data?.courses?.length}
                    coursePerPage={coursePerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                </div>
              ) : (
                <div className="lg:w-[75%] md:w-[72%]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-[25px] lg:gap-[30px]">
                    {currentCourses?.map((course) => (
                      <CourseCardLarge course={course} key={course._id} />
                    ))}
                  </div>
                  <Pagination
                    totalCourses={data?.courses?.length}
                    coursePerPage={coursePerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
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
          {/* fetch error  */}
          {!isLoading && error && (
            <div className="lg:w-[75%] md:w-[72%] flex justify-center mt-[40px] md:mt-[100px]">
              <h3 className="text-center text-[22px] sm:text-[35px] text-secondary font-[600]">
                No Result Found
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
