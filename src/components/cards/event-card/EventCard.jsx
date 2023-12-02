import React from 'react'
import { Link } from 'react-router-dom'
import { FaCalendarAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import eventImg from '../../../assets/about-us/events/event05.jpg'

export default function EventCard() {
  return (
    <div className="rounded-[8px] border border-[#D7DCE3]">
      <Link>
        <div className="relative">
          <img className="rounded-t-[8px]" src={eventImg} alt="" />
          <div className="flex items-center gap-[6px] bg-primary text-white py-[5px] px-[8px] rounded-[4px] absolute left-[15px] top-[15px] font-[300]">
            <FaCalendarAlt className="mt-[-2px]" />
            <p className="text-[14px]">Dec 30, 2023</p>
          </div>
        </div>
      </Link>
      <div className="px-[20px] py-[35px]">
        <Link className="text-[20px] font-[500x] text-secondary">
          Accessible Target Sizes Cheatsheet
        </Link>
        <div className="flex items-center gap-[8px] mt-[10px]">
          <GrLocation className='text-neutral' />
          <span className="text-neutral font-[300]">Alexander City</span>
        </div>
      </div>
    </div>
  );
}