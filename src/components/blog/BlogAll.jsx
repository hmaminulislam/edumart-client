import React from "react";
import "../../css/event-details/event-content.css";
import sponserLogo1 from "../../assets/home/client-slider/brand01.png";
import sponserLogo2 from "../../assets/home/client-slider/brand02.png";
import sponserLogo3 from "../../assets/home/client-slider/brand03.png";
import sponserLogo4 from "../../assets/home/client-slider/brand04.png";
import sponserLogo5 from "../../assets/home/client-slider/brand05.png";
import sponserLogo6 from "../../assets/home/client-slider/brand06.png";
import BlogCard from "../cards/blog-card/BlogCard";

export default function BlogAll() {
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex flex-col md:flex-row gap-[40px]">
        {/* left  */}
        <div className="md:w-[70%] lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {data.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        {/* right  */}
        <div className="md:w-[30%] lg:w-[25%]">
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Details
            </h3>
            <div className="flex flex-col gap-[10px] mt-[30px]">
              <p className="text-secondary font-[500]">Date:</p>
              <p className="text-secondary font-[300]">January 31, 2024</p>
            </div>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              <p className="text-secondary font-[500]">Time:</p>
              <p className="text-secondary font-[300]">8:00 am - 5:00 pm</p>
            </div>
          </div>
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Organizer
            </h3>
            <p className="text-secondary mt-[30px]">Jon Doe</p>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              <p className="text-secondary font-[500]">Phone:</p>
              <a
                className="text-secondary font-[300] hover:text-primary duration-200 transition"
                href="tel:+880 199 8222 222"
                rel="noopener noreferrer"
              >
                +880 199 8222 222
              </a>
            </div>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              <p className="text-secondary font-[500]">Email:</p>
              <a
                className="text-secondary font-[300] hover:text-primary duration-200 transition"
                href="mailto:example@gmail.com"
                rel="noopener noreferrer"
              >
                example@gmail.com
              </a>
              <a
                className="text-primary font-[300] hover:text-secondary duration-200 transition mt-[20px]"
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Organizer Website
              </a>
            </div>
          </div>
          {/* box item  */}
          <div
            className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px]
           event-cont-right-box"
          >
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Venue
            </h3>
            <div className="flex flex-col gap-[10px] mt-[30px]">
              <p className="text-secondary font-[300]">
                PO16 7GZ United Kingdom +
              </p>
            </div>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              <p className="text-secondary font-[500]">Phone:</p>
              <a
                className="text-secondary font-[300] hover:text-primary duration-200 transition"
                href="tel:+880 199 8222 222"
                rel="noopener noreferrer"
              >
                +880 199 8222 222
              </a>
            </div>
            <a
              className="text-primary font-[300] hover:text-secondary duration-200 transition mt-[30px] inline-block"
              href="http://example.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Venue Website
            </a>
          </div>
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] event-cont-right-box">
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Sponsors
            </h3>
            <div className="grid grid-cols-2 gap-x-[10px] gap-y-[30px] mt-[40px]">
              <div className="max-w-[90px]">
                <img src={sponserLogo1} alt="" />
              </div>
              <div className="max-w-[90px]">
                <img src={sponserLogo2} alt="" />
              </div>
              <div className="max-w-[90px]">
                <img src={sponserLogo3} alt="" />
              </div>
              <div className="max-w-[90px]">
                <img src={sponserLogo4} alt="" />
              </div>
              <div className="max-w-[90px]">
                <img src={sponserLogo5} alt="" />
              </div>
              <div className="max-w-[90px]">
                <img src={sponserLogo6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// dummy data

const data = [
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
];
