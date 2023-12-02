import React from 'react'
import { IoShareSocialOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaArrowRight,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import '../../../css/card/instructor-card.css'

export default function InstructorCard({ instructor }) {
  return (
    <div>
    <div className={`${instructor.bgColor} instructor-img-wrap`}>
      <img src={instructor.img} alt="" />
    </div>
    <div className="flex items-center justify-between pt-[20px] px-[10px]">
      <div>
        <p className="text-neutral font-[300]">{instructor.role}</p>
        <h4 className="text-secondary text-[22px] font-[500]">
          {instructor.name}
        </h4>
      </div>
      <div className="relative instructor-social-share-icon">
        <IoShareSocialOutline className="w-[42px] h-[42px] bg-[#e7effc] text-primary rounded-full p-[10px] cursor-pointer hover:bg-primary hover:text-white duration-300 transition" />
        <div className="absolute flex flex-col gap-[8px] instructor-social-icons">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/"
            target="_blank"
            className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition"
          >
            <FaFacebookF />
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/"
            target="_blank"
            className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition"
          >
            <FaTwitter />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/"
            target="_blank"
            className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition"
          >
            <FaInstagram />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkeding.com/"
            target="_blank"
            className="w-[40px] h-[40px] rounded-full bg-primary text-white p-[10px] flex items-center justify-center hover:bg-white hover:text-primary duration-300 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
