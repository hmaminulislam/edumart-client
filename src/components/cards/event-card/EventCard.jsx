import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCalendarAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export default function EventCard({ events }) {
  
  const { date, img, name, location, _id} = events;
  const pathLocation = useLocation()

  return (
    <div className="rounded-[8px] border border-[#D7DCE3]">
      <Link to={`/our-events/${_id}`} state={{ prevUrl: pathLocation.pathname }}>
        <div className="relative">
          <img className="rounded-t-[8px]" src={img} alt="" />
          <div className="flex items-center gap-[6px] bg-primary text-white py-[5px] px-[8px] rounded-[4px] absolute left-[15px] top-[15px] font-[300]">
            <FaCalendarAlt className="mt-[-2px]" />
            <p className="text-[14px]">{date}</p>
          </div>
        </div>
      </Link>
      <div className="px-[20px] py-[35px]">
        <Link
          to={`/our-events/${_id}`}
          state={{ prevUrl: pathLocation.pathname }}
          className="text-[20px] font-[500x] text-secondary text-link-underline"
        >
          {name}
        </Link>
        <div className="flex items-center gap-[8px] mt-[10px]">
          <GrLocation className="text-neutral" />
          <span
            className="text-neutral font-[300]"
          >
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}
