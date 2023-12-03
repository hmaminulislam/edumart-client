import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import eventImg from "../../assets/events/event_01.webp";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "../../css/event-details/event-content.css";
import sponserLogo1 from "../../assets/home/client-slider/brand01.png";
import sponserLogo2 from "../../assets/home/client-slider/brand02.png";
import sponserLogo3 from "../../assets/home/client-slider/brand03.png";
import sponserLogo4 from "../../assets/home/client-slider/brand04.png";
import sponserLogo5 from "../../assets/home/client-slider/brand05.png";
import sponserLogo6 from "../../assets/home/client-slider/brand06.png";

export default function EventContent() {
  
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex flex-col md:flex-row gap-[40px]">
        {/* left  */}
        <div className="md:w-[70%] lg:w-[75%]">
          <h1 className="text-[25px] sm:text-[30px] lg:text-[36px] font-[500] text-secondary">
            Swing Into April (2023 Wallpapers Edition)
          </h1>
          <div className="flex flex-wrap items-center sm:gap-[20px] gap-y-[15px] gap-x-[20px] mt-[20px]">
            <div className="flex items-center gap-[6px]">
              <IoLocationOutline className="text-primary text-[18px]" />
              <p className="text-neutral font-[300]">Alexander City</p>
            </div>
            <div className="flex items-center gap-[6px]">
              <FaRegCalendarAlt className="text-primary text-[16px]" />
              <p className="text-neutral font-[300]">Feb 15, 2024</p>
            </div>
            <div className="flex items-center gap-[6px]">
              <MdOutlineWatchLater className="text-primary text-[18px]" />
              <p className="text-neutral font-[300]">08:00 AM - 05:00 PM</p>
            </div>
          </div>
          <div className="mt-[30px]">
            <img src={eventImg} alt="" />
          </div>
          <h4 className="text-neutral text-[22px] mt-[20px] mb-[5px]">
            About The Event :
          </h4>
          <p className="text-neutral font-[300]">
            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
            consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum
            that dolocons rsus mal suada and fadolorit to the consectetur elit.
            All the Lorem Ipsum generators on the Internet tend to repeat that
            predefined chunks as necessary, making this the first true dummy
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined Lorem Ipsum looks reasonable.
          </p>
          <h4 className="text-neutral text-[22px] mt-[20px] mb-[5px]">
            During this event we’ll cover :
          </h4>
          <p className="text-neutral font-[300]">
            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
            consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum
            that dolocons rsus mal suada and fadolorit.
          </p>
          {/* list items  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] sm:gap-[20px] mt-[30px] sm:mt-[40px]">
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">Become a UX designer.</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">You will be able to add UX designe</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">Become a UI designer.</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">Create quick wireframes.</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">Downloadable exercise files</p>
            </div>
          </div>
          {/* item  */}
          <div className="mt-[40px]">
            <h4 className="text-neutral text-[22px] mb-[5px]">
              Venue Map Direction:
            </h4>
            <p className="text-neutral font-[300]">
              Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
              consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm
              ipsum that dolocons rsus mal suada and fadolorit.
            </p>
          </div>
          {/* google map  */}
          <div className="h-[350px] mt-[30px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14604.944003271832!2d90.4219455!3d23.774609!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1701454140000!5m2!1sen!2sbd"
              loading="lazy"
              width={"100%"}
              height={"100%"}
            ></iframe>
          </div>
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
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px]
           event-cont-right-box">
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
