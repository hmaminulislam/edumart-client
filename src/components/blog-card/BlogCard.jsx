import React from 'react'
import blogImg from '../../assets/blog-card/blog_card.jpg'
import { CiUser, CiCalendarDate } from "react-icons/ci";
import { Link } from 'react-router-dom';
import '../../css/card/blog-card.css'

export default function BlogCard() {
  return (
    <div className="bg-white rounded-[8px]">
      <div>
        <Link>
          <img
            className="w-[100%] h-[250px] rounded-t-[8px] object-cover"
            src={blogImg}
            alt=""
          />
        </Link>
      </div>
      <div className="sm:px-[35px] px-[20px] pb-[45px] pt-[25px]">
        <Link className="text-[22px] font-[500] text-secondary blog-title-link">
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
