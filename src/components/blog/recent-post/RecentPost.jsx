import React from 'react';
import { Link } from "react-router-dom";
import { LuCalendarCheck } from "react-icons/lu";
import { useGetBlogsQuery } from '../../../redux/api/api';

export default function RecentPost() {
    const { data, isLoading, error } = useGetBlogsQuery(undefined)
  return (
    <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
      <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
        Recent Posts
      </h3>
      <div className="mt-[40px] flex flex-col gap-[22px]">
        {/* blog item  */}
        {data?.slice(0, 4).map((blog) => (
          <Link key={blog?._id} to={`/blog/${blog?._id}`} className="flex items-center gap-[14px]">
            <div className="w-[180px] h-[80px]">
              <img
                className="object-cover h-full rounded-[4px]"
                src={blog?.img}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-[15px] font-[500] text-secondary">
                {blog?.name.slice(0, 25)}...
              </h3>
              <div className="flex items-center gap-[5px]">
                <LuCalendarCheck className="text-primary" />
                <span className="text-[14px] font-[300] text-neutral mt-[2px]">
                  {blog?.date}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
