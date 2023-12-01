import React from 'react'
import CourseCard from '../../course-card/CourseCard';

export default function Featured() {
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
            <button className="text-secondary">All Courses</button>
            <button className="text-secondary">Business</button>
            <button className="text-secondary">Design</button>
            <button className="text-secondary">Graphic Design</button>
            <button className="text-secondary">Marketing</button>
          </div>
        </div>
        {/* couse card contents */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-[40px]">
          {data.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
    {name: 'course name'},
    {name: 'course name'},
    {name: 'course name'},
    {name: 'course name'},
    {name: 'course name'},
    {name: 'course name'},
]