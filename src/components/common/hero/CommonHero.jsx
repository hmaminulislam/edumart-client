import React from 'react'
import '../../../css/common/common-hero/common-hero.css'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

export default function CommonHero({pageName}) {
  return (
    <div className="common-hero lg:pt-[150px] lg:pb-[155px] md:pt-[120px] md:pb-[125px] pt-[100px] pb-[105px]">
      <div className="container-main flex flex-col items-center xl:items-start">
        <h1 className="sm:text-[42px] text-[34px] sm:font-[700] font-[600] text-white">{pageName}</h1>
        <div className="flex items-center gap-[4px] sm:mt-[12px] mt-[6px]">
          <Link className="text-white font-[500]" to="/">
            Home
          </Link>
          <FaChevronRight className="text-gray-300 text-[14px]" />
          <p className="text-[#B6CFF5] font-[500]">{pageName}</p>
        </div>
      </div>
    </div>
  );
}
