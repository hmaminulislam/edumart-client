import React, { useState } from "react";
import "../../../css/event-details/event-content.css";
import { Link } from "react-router-dom";
import { BsCardChecklist, BsFillCheckCircleFill } from "react-icons/bs";
import { FaUsers, FaGraduationCap } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import instructorImg from '../../../assets/course-card/author_img.png'
import CourseInfo from "./course-info/CourseInfo";
import Curriculam from "./curriculam/Curriculam";
import Reviews from "./reviews/Reviews";
import Announcements from "./announcements/Announcements";

export default function CourseContents() {
  const [open, setOpen] = useState('course info')
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex flex-col md:flex-row gap-[40px]">
        {/* left  */}
        <div className="md:w-[70%] lg:w-[75%]">
          <div className="lg:h-[500px] md:h-[400px] sm:h-[380px] h-[280px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/13VAykLXbiw?si=o7nBbIf8tABy9KnK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mt-[40px]">
            <div className="flex items-center flex-wrap sm:gap-x-[50px] gap-x-[25px] gap-y-[20px] border-[#E6EAEF] border-b-[1px] pb-[20px]">
              <button
                onClick={() => setOpen("course info")}
                className={`font-[500] sm:text-[20px] text-[18px] pb-[3px] ${
                  open === "course info"
                    ? "text-primary border-b-[2px] border-primary"
                    : "text-secondary border-b-[2px] border-white"
                }`}
              >
                Course Info
              </button>
              <button
                onClick={() => setOpen("curriculam")}
                className={`font-[500] sm:text-[20px] text-[18px] pb-[3px] ${
                  open === "curriculam"
                    ? "text-primary border-b-[2px] border-primary"
                    : "text-secondary border-b-[2px] border-white"
                }`}
              >
                Curriculam
              </button>
              <button
                onClick={() => setOpen("reviews")}
                className={`font-[500] sm:text-[20px] text-[18px] pb-[3px] ${
                  open === "reviews"
                    ? "text-primary border-b-[2px] border-primary"
                    : "text-secondary border-b-[2px] border-white"
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setOpen("announcements")}
                className={`font-[500] sm:text-[20px] text-[18px] pb-[3px] ${
                  open === "announcements"
                    ? "text-primary border-b-[2px] border-primary"
                    : "text-secondary border-b-[2px] border-white"
                }`}
              >
                Announcements
              </button>
            </div>
            {(open === "course info" && <CourseInfo />) ||
              (open === "curriculam" && <Curriculam />) ||
              (open === "reviews" && <Reviews />) ||
              (open === "announcements" && <Announcements />)}
          </div>
        </div>
        {/* right  */}
        <div className="md:w-[30%] lg:w-[25%]">
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
            <h3 className="text-[25px] font-[600] text-secondary mb-[20px]">
              $45.00
            </h3>
            <Link to="/">
              <button className="flex items-center justify-center gap-2 bg-primary text-white border border-primary py-[13px] px-[45px] md:px-[10px] md:w-[90%] md:mx-auto rounded-[6px] hover:bg-secondary transition duration-300">
                Enroll Now
              </button>
            </Link>
            <p className="text-secondary font-[300] md:text-center mt-[14px]">
              Life time access
            </p>
          </div>
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Summary
            </h3>
            <div className="flex flex-col gap-[20px] mt-[40px]">
              <div className="flex items-center gap-[15px]">
                <BsCardChecklist className="text-neutral text-[20px]" />
                <p className="font-[300] text-neutral text-[15px]">
                  All Levels
                </p>
              </div>
              <div className="flex items-center gap-[15px]">
                <FaUsers className="text-neutral text-[20px]" />
                <p className="font-[300] text-neutral text-[15px]">
                  63 Total Enrolled
                </p>
              </div>
              <div className="flex items-center gap-[15px]">
                <FaGraduationCap className="text-neutral text-[20px]" />
                <p className="font-[300] text-neutral text-[15px]">English</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <MdAccessTime className="text-neutral text-[20px]" />
                <p className="font-[300] text-neutral text-[15px]">
                  12 hours 30 minute
                </p>
              </div>
              <div className="flex items-center gap-[15px]">
                <GrUpdate className="text-neutral text-[20px]" />
                <p className="font-[300] text-neutral text-[15px]">
                  July 23, 2023 Last
                </p>
              </div>
            </div>
          </div>
          {/* box item  */}
          <div
            className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px]
           event-cont-right-box"
          >
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Instructor
            </h3>
            <div className="flex flex-col gap-[10px] mt-[30px]">
              <img
                className="w-[100px] h-[100px] rounded-full mx-auto"
                src={instructorImg}
                alt=""
              />
              <p className="text-[20px] font-[500] text-neutral text-center">
                Taslima Khatun
              </p>
            </div>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              <p className="text-secondary text-[18px] font-[500]">Audience</p>
              <p className="text-neutral text-[14px]">
                Anyone wanting to learn the truth about dieting & meal planning.
                Anyone with an open mind towards dieting.
              </p>
            </div>
          </div>
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] event-cont-right-box">
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Requirements
            </h3>
            <div className="mt-[40px]">
              <p className="text-neutral font-[500]">Language Proficiency:</p>
              <p className="text-neutral font-[300] mt-[10px]">
                Develop fluency in spoken and written English. Enhance
                vocabulary and language comprehension skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
