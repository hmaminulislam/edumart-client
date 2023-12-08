import React from "react";
import InstructorCard from "../cards/instructor-card/InstructorCard";
import instuctorImg1 from "../../assets/instructors/instructor01.png";
import instuctorImg2 from "../../assets/instructors/instructor02.png";
import instuctorImg3 from "../../assets/instructors/instructor03.png";
import instuctorImg4 from "../../assets/instructors/instructor04.png";
import instuctorImg5 from "../../assets/instructors/instructor05.png";
import instuctorImg6 from "../../assets/instructors/instructor06.png";
import instuctorImg7 from "../../assets/instructors/instructor08.png";
import instuctorImg8 from "../../assets/instructors/instructor09.png";
import { FaArrowRight } from "react-icons/fa";
import "../../css/our-instructor/instructors.css";

export default function Instructors() {
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[80px]">
          {instructors.map((instructor, index) => (
            <InstructorCard instructor={instructor} key={index} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center sm:gap-[40px] gap-[30px] sm:mt-[100px] mt-[80px]">
          <div className="instructor-cta-item-1 md:w-[50%] w-full py-[80px] sm:px-[40px] px-[20px] rounded-[12px]">
            <div className="max-w-[300px]">
              <h4 className="text-[22px] font-[600] text-white mb-[20px]">
                Best Instructors From Around The World
              </h4>
              <button className="flex items-center justify-center gap-2 bg-white text-secondary py-[14px] sm:px-[32px] px-[25px] rounded-[6px] hover:bg-secondary hover:text-white transition duration-300">
                Register Now <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="instructor-cta-item-2 md:w-[50%] w-full py-[80px] md:px-[40px] px-[20px] rounded-[12px]">
            <div className="max-w-[300px]">
              <h4 className="text-[22px] font-[600] text-white mb-[20px]">
                Get Unlimited Access To 6,000+ Of Courses
              </h4>
              <button className="flex items-center justify-center gap-2 bg-white text-secondary py-[14px] sm:px-[32px] px-[25px] rounded-[6px] hover:bg-secondary hover:text-white transition duration-300">
                Discover Now <FaArrowRight />
              </button>
            </div>
          </div>
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
  {
    role: "UX Designer",
    name: "Ronald Richards",
    img: instuctorImg5,
    bgColor: "bg-[#FFFAE2]",
  },
  {
    role: "Marketer",
    name: "Eleanor Pena",
    img: instuctorImg6,
    bgColor: "bg-[#E6E2FF]",
  },
  {
    role: "Designer",
    name: "Floyd Miles",
    img: instuctorImg7,
    bgColor: "bg-[#FFE8F4]",
  },
  {
    role: "Developer",
    name: "Jacob Jones",
    img: instuctorImg8,
    bgColor: "bg-[#E2FFFC]",
  },
];
