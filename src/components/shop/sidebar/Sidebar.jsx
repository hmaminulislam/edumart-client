import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    
  return (
    <div className="lg:w-[25%] md:w-[28%] hidden md:block">
      {/* filter item  */}
      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
        <h4 className="text-[20px] text-secondary filter-title-underline">
          Filter by price
        </h4>
      </div>
      {/* filter item  */}
      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
        <h4 className="text-[20px] text-secondary filter-title-underline">
          Categories
        </h4>
        <div className="flex flex-col gap-[12px] mt-[30px]">
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="finance"
              name="finance"
            />
            <label htmlFor="finance" className="font-[300] cursor-pointer">
              Finance (5)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="project"
              name="project"
            />
            <label htmlFor="project" className="font-[300] cursor-pointer">
              Video editor (6)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="graphic"
              name="graphic"
            />
            <label htmlFor="graphic" className="font-[300] cursor-pointer">
              Graphic design (9)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="ui"
              name="ui"
            />
            <label htmlFor="ui" className="font-[300] cursor-pointer">
              UI/UX design (6)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="3d"
              name="3d"
            />
            <label htmlFor="3d" className="font-[300] cursor-pointer">
              3D animation (4)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="javascript"
              name="javascript"
            />
            <label htmlFor="javascript" className="font-[300] cursor-pointer">
              Javascript (3)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="Wordpress"
              name="Wordpress"
            />
            <label htmlFor="Wordpress" className="font-[300] cursor-pointer">
              Wordpress (3)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="PHP"
              name="PHP"
            />
            <label htmlFor="PHP" className="font-[300] cursor-pointer">
              PHP (2)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="Seo"
              name="Seo"
            />
            <label htmlFor="Seo" className="font-[300] cursor-pointer">
              Seo (1)
            </label>
          </div>
        </div>
      </div>
      {/* filter item  */}
      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
        <h4 className="text-[20px] text-secondary filter-title-underline">
          Top Prodcuts
        </h4>
      </div>
      {/* filter item  */}
      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px]">
        <h4 className="text-[20px] text-secondary filter-title-underline">
          Product tags
        </h4>
        <div className="flex flex-wrap gap-[14px] mt-[30px]">
          <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
            Apps
          </Link>
          <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
            Art & Design
          </Link>
          <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
            Courses
          </Link>
          <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
            Education
          </Link>
          <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
            Learning
          </Link>
          <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
            Programming
          </Link>
          <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
            UI/UX
          </Link>
          <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
            Video
          </Link>
        </div>
      </div>
    </div>
  );
}
