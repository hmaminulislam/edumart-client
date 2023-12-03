import React, { useState } from 'react'
import '../../../css/common/common-hero/common-hero.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

export default function CommonHero({ pageName }) {
  const params = useParams()
  const location = useLocation()
  const prevPathname = location.state?.prevUrl;
  const exceptSlish = prevPathname?.split("/")
  const nameWithHipen = exceptSlish && exceptSlish[1]
  const nameDivided = nameWithHipen?.split('-')
  const name = nameDivided && `${nameDivided[0]} ${nameDivided[1]}`
    
  return (
    <div className="common-hero lg:pt-[150px] lg:pb-[155px] md:pt-[120px] md:pb-[125px] pt-[100px] pb-[105px]">
      <div className="container-main flex flex-col items-center xl:items-start">
        <h1 className="sm:text-[42px] text-[34px] sm:font-[700] font-[600] text-white">{pageName}</h1>
        <div className="flex items-center gap-[4px] sm:mt-[12px] mt-[6px]">
          <Link className="text-white font-[500]" to="/">
            Home
          </Link>
          {name && <div className='flex items-center'><FaChevronRight className="text-gray-300 text-[14px]" /><Link className="text-white font-[500] capitalize" to={prevPathname}>
            {name}
          </Link></div>}
          <FaChevronRight className="text-gray-300 text-[14px]" />
          {params.name ? <p className="text-[#B6CFF5] font-[500]">{params?.name}</p> : <p className="text-[#B6CFF5] font-[500]">{pageName}</p>}
        </div>
      </div>
    </div>
  );
}
