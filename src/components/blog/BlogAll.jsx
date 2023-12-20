import React from "react";
import "../../css/event-details/event-content.css";
import BlogCard from "../cards/blog-card/BlogCard";
import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../../redux/api/api";
import RecentPost from "./recent-post/RecentPost";
import BlogCategory from "./blog-category/BlogCategory";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

export default function BlogAll() {

  // get blogs redux api
  const { isLoading, data, error } = useGetBlogsQuery(undefined);

  // blog data
  let blogData;

  // handle category filter
  const { category } = useSelector((state) => state.blog);

  if (category === "All") {
    blogData = data;
  } else {
    const blogCatData = data.filter((blog) => blog.category === category);
    blogData = blogCatData;
  }

  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex flex-col md:flex-row gap-[40px]">
        {/* left  */}
        <div className="md:w-[70%] lg:w-[75%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <AnimatePresence>
              {blogData?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* right  */}
        <div className="md:w-[30%] lg:w-[25%]">
          {/* blog categories  */}
          <BlogCategory />
          {/* recent posts  */}
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

// dummy data

const data = [
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
  { name: "1" },
];
