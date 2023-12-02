import React from "react";
import instuctorImg1 from "../../../assets/instructors/instructor01.png";
import instuctorImg2 from "../../../assets/instructors/instructor02.png";
import instuctorImg3 from "../../../assets/instructors/instructor03.png";
import instuctorImg4 from "../../../assets/instructors/instructor04.png";
import shape from '../../../assets/instructors/cta_shape01.svg'
import "../../../css/home/top-instructor.css";
import {
  FaArrowRight,
} from "react-icons/fa";
import InstructorCard from "../../cards/instructor-card/InstructorCard";

export default function TopInstructor() {
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top  */}
        <div className="flex flex-col md:flex-row md:items-center sm:gap-[30px] justify-between">
          <div>
            <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
              Our Qualified People Matter
            </span>
            <h2 className="sm:text-[36px] text-[28px] font-[600] text-secondary section-title mt-[15px] mb-[12px]">
              Top <span className="text-primary">Class</span> Instructor
            </h2>
          </div>
          <div>
            <button className="flex items-center justify-center gap-2 bg-white text-primary border border-primary py-[13px] sm:px-[32px] px-[24px] rounded-[6px] hover:bg-primary hover:text-white transition duration-300">
              All Instructors <FaArrowRight />
            </button>
          </div>
        </div>
        {/* instructors content  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[50px]">
          {/* instructor item */}
          {instructors.map((instructor, index) => (
            <InstructorCard instructor={instructor} key={index} />
          ))}
        </div>
        {/* Join us  */}
        <div className="bg-primary py-[50px] px-[30px] sm:px-[40px] rounded-[6px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[18px] sm:gap-[20px] md:gap-[10px] cta-instructor mt-[50px] sm:mt-[70px]">
          <h3 className="text-[22px] font-[500] text-white max-w-[185px]">
            Join Us & Spead Expericnces
          </h3>
          <p className="text-[15px] text-white font-[300] xl:max-w-[450px] lg:max-w-[360px] max-w-[450px]">
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe awut elit
            ellus, luctus nec ullamcorper mattisBorem
          </p>
          <button className="flex items-center justify-center gap-2 bg-white text-secondary py-[14px] sm:px-[32px] px-[25px] rounded-[6px]">
            Become an Instructor <FaArrowRight />
          </button>
          <img className="absolute top-[-20px] left-[20px]" src={shape} alt="" />
        </div>
      </div>
    </div>
  );
}

const instructors = [
  {
    role: "Graphic Designer",
    name: "Robert Smith",
    img: instuctorImg1,
    bgColor: "bg-[#E2FAFF]",
  },
  {
    role: "Web developer",
    name: "Olivia Mia",
    img: instuctorImg2,
    bgColor: "bg-[#E4FFE2]",
  },
  {
    role: "Digital Marketer",
    name: "William Hope",
    img: instuctorImg3,
    bgColor: "bg-[#E8EDFF]",
  },
  {
    role: "Support Staff",
    name: "Sophia Ava",
    img: instuctorImg4,
    bgColor: "bg-[#FFE2E2]",
  },
];