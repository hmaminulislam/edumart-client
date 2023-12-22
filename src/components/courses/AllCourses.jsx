import React from "react";
import "../../css/courses/all-courses.css";
import CourseCardSmall from "../cards/course-cards/CourseCardSmall";
import CourseCardLarge from "../cards/course-cards/CourseCardLarge";
import { useGetCoursesQuery } from "../../redux/api/api";
import CourseTopbar from "./CourseTopbar";
import { useDispatch, useSelector } from "react-redux";
import { courseDataSet } from "../../redux/features/course/courseSlice";
import SidebarFilter from "./sidebar-filter/SidebarFilter";

export default function AllCourses() {

  // data load api redux
  const { data, isLoading, error } = useGetCoursesQuery(undefined);

  const dispatch = useDispatch();
  
  // data set course redux 
  if (data) {
    dispatch(courseDataSet(data?.courses));
  }
  
  // course data get rudex 
  const {courseData} = useSelector((state) => state.course)

  // courses layout view state 
  const { view } = useSelector((state) => state.course);
  
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top with mobile sidebar  */}
        <CourseTopbar />
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
                <div className="lg:w-[75%] md:w-[72%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
                  {data &&
                    courseData
                      .slice(0, 9)
                      .map((course, index) => (
                        <CourseCardSmall course={course} key={course._id} />
                      ))}
                </div>
              ) : (
                <div className="lg:w-[75%] md:w-[72%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-[25px] lg:gap-[30px]">
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
