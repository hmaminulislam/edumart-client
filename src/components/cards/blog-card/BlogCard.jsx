import React from 'react'
import blogImg from '../../../assets/blog-card/blog_card.jpg'
import { CiUser, CiCalendarDate } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

export default function BlogCard({ blog }) {
  
  const location = useLocation();

  const { name, img, _id, authorName, date } = blog;

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="bg-white rounded-[8px] border border-[#eee]"
    >
      <div>
        <Link to={`/blog/${_id}`} state={{ prevUrl: location.pathname }}>
          <img
            className="w-[100%] h-[250px] rounded-t-[8px] object-cover"
            src={img}
            alt=""
          />
        </Link>
      </div>
      <div className="lg:px-[25px] sm:px-[20px] px-[14px] pb-[45px] pt-[25px]">
        <Link
          to={`/blog/${_id}`}
          state={{ prevUrl: location.pathname }}
          className="sm:text-[20px] md:text-[22px] text-[19px] font-[500] text-secondary text-link-underline"
        >
          {name}
        </Link>
        <div className="flex items-center gap-[20px] mt-[18px]">
          <div className="flex items-center gap-[4px]">
            <CiUser className="text-neutral" />
            <span className="font-[300] text-neutral">{authorName}</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <CiCalendarDate className="text-neutral" />{" "}
            <span className="font-[300] text-neutral">{date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
