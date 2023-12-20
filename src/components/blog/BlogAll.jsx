import React from "react";
import "../../css/event-details/event-content.css";
import BlogCard from "../cards/blog-card/BlogCard";
import blogSiteImg from "../../assets/blog-card/blog_card.jpg";
import { Link } from "react-router-dom";
import { LuCalendarCheck } from "react-icons/lu";
import { useGetBlogsQuery } from "../../redux/api/api";

export default function BlogAll() {
  // get blogs redux api
  const { isLoading, data, error } = useGetBlogsQuery(undefined);
  
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex flex-col md:flex-row gap-[40px]">
        {/* left  */}
        <div className="md:w-[70%] lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {data?.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
        {/* right  */}
        <div className="md:w-[30%] lg:w-[25%]">
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Categories
            </h3>
            <div className="flex flex-col gap-[10px] mt-[35px]">
              <p className="text-secondary font-[300]">Art & Design</p>
              <p className="text-secondary font-[300]">Buniness</p>
              <p className="text-secondary font-[300]">Data Science</p>
              <p className="text-secondary font-[300]">Finance</p>
            </div>
          </div>
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Recent Posts
            </h3>
            <div className="mt-[40px] flex flex-col gap-[22px]">
              {/* blog item  */}
              <Link className="flex items-center gap-[14px]">
                <div className="w-[180px] h-[80px]">
                  <img
                    className="object-cover h-full rounded-[4px]"
                    src={blogSiteImg}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-[500] text-secondary">
                    When aeunkno printer took galley of..
                  </h3>
                  <div className="flex items-center gap-[5px]">
                    <LuCalendarCheck className="text-primary" />
                    <span className="text-[14px] font-[300] text-neutral">
                      Jun 22, 2024
                    </span>
                  </div>
                </div>
              </Link>
              {/* blog item  */}
              <Link className="flex items-center gap-[14px]">
                <div className="w-[180px] h-[80px]">
                  <img
                    className="object-cover h-full rounded-[4px]"
                    src={blogSiteImg}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-[500] text-secondary">
                    When aeunkno printer took galley of..
                  </h3>
                  <div className="flex items-center gap-[5px]">
                    <LuCalendarCheck className="text-primary" />
                    <span className="text-[14px] font-[300] text-neutral">
                      Jun 22, 2024
                    </span>
                  </div>
                </div>
              </Link>
              {/* blog item  */}
              <Link className="flex items-center gap-[14px]">
                <div className="w-[180px] h-[80px]">
                  <img
                    className="object-cover h-full rounded-[4px]"
                    src={blogSiteImg}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-[500] text-secondary">
                    When aeunkno printer took galley of..
                  </h3>
                  <div className="flex items-center gap-[5px]">
                    <LuCalendarCheck className="text-primary" />
                    <span className="text-[14px] font-[300] text-neutral">
                      Jun 22, 2024
                    </span>
                  </div>
                </div>
              </Link>
              {/* blog item  */}
              <Link className="flex items-center gap-[14px]">
                <div className="w-[180px] h-[80px]">
                  <img
                    className="object-cover h-full rounded-[4px]"
                    src={blogSiteImg}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-[500] text-secondary">
                    When aeunkno printer took galley of..
                  </h3>
                  <div className="flex items-center gap-[5px]">
                    <LuCalendarCheck className="text-primary" />
                    <span className="text-[14px] font-[300] text-neutral">
                      Jun 22, 2024
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
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

// dummy data

const data = [
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
];
