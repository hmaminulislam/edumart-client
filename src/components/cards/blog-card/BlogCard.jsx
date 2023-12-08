import React from 'react'
import blogImg from '../../../assets/blog-card/blog_card.jpg'
import { CiUser, CiCalendarDate } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';

export default function BlogCard() {
  const location = useLocation();
  return (
    <div className="bg-white rounded-[8px] border border-[#eee]">
      <div>
        <Link to={`/blog/${"name"}`} state={{ prevUrl: location.pathname }}>
          <img
            className="w-[100%] h-[250px] rounded-t-[8px] object-cover"
            src={blogImg}
            alt=""
          />
        </Link>
      </div>
      <div className="lg:px-[25px] sm:px-[20px] px-[14px] pb-[45px] pt-[25px]">
        <Link
          to={`/blog/${"name"}`}
          state={{ prevUrl: location.pathname }}
          className="sm:text-[20px] md:text-[22px] text-[19px] font-[500] text-secondary text-link-underline"
        >
          What Leonardo Teach us About Web Design
        </Link>
        <div className="flex items-center gap-[20px] mt-[18px]">
          <div className="flex items-center gap-[4px]">
            <CiUser className="text-neutral" />
            <span className="font-[300] text-neutral">By Eduvalt</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <CiCalendarDate className="text-neutral" />{" "}
            <span className="font-[300] text-neutral">June 22, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
