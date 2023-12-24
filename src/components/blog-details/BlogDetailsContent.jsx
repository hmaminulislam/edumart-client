import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import eventImg from "../../assets/events/event_01.webp";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "../../css/event-details/event-content.css";
import { Link, useParams } from "react-router-dom";
import blogSiteImg from "../../assets/blog-card/blog_card.jpg";
import { LuCalendarCheck } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaQuoteRight } from "react-icons/fa";
import { useGetBlogByIdQuery } from "../../redux/api/api";
import RecentPost from "../blog/recent-post/RecentPost";
import BlogCategory from "../blog/blog-category/BlogCategory";

export default function EventContent() {

  const { id } = useParams()

  const { data, isLoading, error } = useGetBlogByIdQuery(id)
  
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex flex-col md:flex-row gap-[60px] md:gap-[40px]">
        {/* left  */}
        <div className="md:w-[70%] lg:w-[75%]">
          <div className="mb-[30px]">
            <img
              className="lg:h-[500px] h-[300px] sm:h-[320px] rounded-[8px] object-cover w-full"
              src={data?.img}
              alt=""
            />
          </div>
          <h1 className="text-[25px] sm:text-[30px] lg:text-[36px] font-[500] text-secondary">
            {name}
          </h1>
          <div className="flex flex-wrap items-center sm:gap-[20px] gap-y-[15px] gap-x-[20px] mt-[20px]">
            <div className="flex items-center gap-[6px]">
              <CiUser className="text-primary text-[18px]" />
              <p className="text-neutral font-[300]">{data?.authorName}</p>
            </div>
            <div className="flex items-center gap-[6px]">
              <FaRegCalendarAlt className="text-primary text-[16px]" />
              <p className="text-neutral font-[300]">{data?.date}</p>
            </div>
            <div className="flex items-center gap-[6px]">
              <FaRegComment className="text-primary text-[18px]" />
              <p className="text-neutral font-[300]">No Comments</p>
            </div>
          </div>
          <p className="text-neutral mt-[20px] font-[300]">{data?.description}</p>
          <div className="flex justify-between gap-[15px] sm:gap-[35px] py-[30px] sm:py-[40px] px-[18px] sm:px-[35px] border-l-[6px] mt-[35px] border-primary bg-[#F1F8FF]">
            <p className="text-secondary font-[500] text-[16px] sm:text-[22px]">
              {data?.blockquote}
            </p>
            <FaQuoteRight className="text-[100px] text-neutral mt-[-30px]" />
          </div>
          <h4 className="text-neutral text-[22px] mt-[30px] mb-[5px]">
            During this program :
          </h4>
          <p className="text-neutral font-[300]">{data?.during}</p>
          {/* list items  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] sm:gap-[20px] mt-[30px] sm:mt-[40px]">
            {data?.programs?.map((prog) => (
              <div key={prog?._id} className="flex items-center gap-[10px]">
                <BsFillCheckCircleFill className="text-primary text-[24px]" />
                <p className="text-neutral">{prog?.title}</p>
              </div>
            ))}
          </div>
          {/* item  */}
          <p className="text-neutral font-[300] mt-[40px]">{data?.conclusion}</p>
          {/* comment form */}
          <div className="border-t-[1px] border[#E6E6E6] pt-[40px] mt-[50px]">
            <h3 className="text-[22px] font-[500] text-secondary">
              Write a Comment
            </h3>
            <form className="mt-[30px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[25px] gap-[14px]">
                <input
                  className="bg-[#F6F7FA] py-[12px] px-[10px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-[#F6F7FA] py-[12px] px-[10px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                  type="email"
                  placeholder="Email*"
                  required
                />
              </div>
              <input
                className="bg-[#F6F7FA] py-[12px] px-[10px] sm:mt-[25px] mt-[14px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                type="text"
                placeholder="Subject*"
                required
              />
              <textarea
                name="message"
                id=""
                rows="5"
                placeholder="Message*"
                className="bg-[#F6F7FA] py-[12px] px-[10px] sm:my-[25px] my-[14px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field-message outline-none"
              ></textarea>
              <button
                className="bg-primary text-white border border-primary py-[13px] sm:px-[32px] px-[24px] rounded-[6px] hover:bg-white hover:text-primary transition duration-300"
                type="submit"
                disabled={true}
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
        {/* right  */}
        <div className="md:w-[30%] lg:w-[25%]">
          {/* blog category  */}
          <BlogCategory />
          {/* recent posts */}
          <RecentPost />
          {/* box item  */}
          <div
            className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px]
           event-cont-right-box"
          >
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-[14px] mt-[30px]">
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Apps
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Art & Design
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Courses
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Education
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Learning
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Programming
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                UI/UX
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
