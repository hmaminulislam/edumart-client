import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function CourseInfo({ course }) {
  const {
    name,
    img,
    lessons,
    duration,
    Requirements,
    curriculam,
    enrolled,
    info,
    instructorDetails,
    instructorName,
    instructorImg,
    language,
    lastUpdate,
    level,
    price,
    programs,
    students,
    _id,
  } = course;
  return (
    <div className="mt-[30px]">
      <p className="text-neutral font-[400] leading-7">{info}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] sm:gap-[20px] mt-[30px] sm:mt-[40px]">
        {programs?.map((program) => (
          <div key={program._id} className="flex items-center gap-[10px]">
            <BsFillCheckCircleFill className="text-primary text-[24px]" />
            <p className="text-neutral">{program.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
