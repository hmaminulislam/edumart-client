import React from "react";
import BlogCard from "../../blog-card/BlogCard";

export default function LatestBlog() {
  return (
    <div className="bg-[#F5F7FB] 2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top */}
        <div className="text-center max-w-[560px] mx-auto">
          <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
            Always Smart To Hear News
          </span>
          <h2 className="sm:text-[36px] text-[28px] font-[600] text-secondary section-title mt-[15px] mb-[12px]">
            Latest
            <span className="text-primary"> News</span> & Blog
          </h2>
          <p className="text-[15px] text-neutral font-[300] mb-[14px]">
            Receive huge benefits with our lifetime Plumbing Receive huge
            benefits with our lifetime Plumbing email address will be shown
          </p>
        </div>
        {/* blog card content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

// dummy blog content

const blogs = [
  {
    name: "1",
  },
  {
    name: "1",
  },
  {
    name: "1",
  },
];
