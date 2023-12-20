import React from 'react'

export default function SidebarFilterMob() {
  return (
    <div className="lg:w-[25%] md:w-[28%]">
      {/* mobile filter item  */}
      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
        <h4 className="text-[20px] text-secondary filter-title-underline">
          Categories
        </h4>
        <div className="flex flex-col gap-[12px] mt-[30px]">
          <div className="flex items-center gap-[10px]">
            <input className="checkbox-filter" type="checkbox" id="business" />
            <label htmlFor="business" className="font-[300] cursor-pointer">
              Business (5)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="design"
              name="design"
            />
            <label htmlFor="design" className="font-[300] cursor-pointer">
              Design (6)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="development"
              name="development"
            />
            <label htmlFor="development" className="font-[300] cursor-pointer">
              Development (9)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="health"
              name="health"
            />
            <label htmlFor="health" className="font-[300] cursor-pointer">
              Health & Fitness (6)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="math"
              name="math"
            />
            <label htmlFor="math" className="font-[300] cursor-pointer">
              Math (4)
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="photography"
              name="photography"
            />
            <label htmlFor="photography" className="font-[300] cursor-pointer">
              Photography (3)
            </label>
          </div>
        </div>
      </div>
      {/* mobile filter item  */}
      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
        <h4 className="text-[20px] text-secondary filter-title-underline">
          Departments
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
      {/* mobile filter item  */}
      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
        <h4 className="text-[20px] text-secondary filter-title-underline">
          Prices
        </h4>
        <div className="flex flex-col gap-[12px] mt-[30px]">
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="Free"
              name="Free"
            />
            <label htmlFor="Free" className="font-[300] cursor-pointer">
              Free
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="Paid"
              name="Paid"
            />
            <label htmlFor="Paid" className="font-[300] cursor-pointer">
              Paid
            </label>
          </div>
        </div>
      </div>
      {/* mobile filter item  */}
      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px]">
        <h4 className="text-[20px] text-secondary filter-title-underline">
          Levels
        </h4>
        <div className="flex flex-col gap-[12px] mt-[30px]">
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="Beginner"
              name="Beginner"
            />
            <label htmlFor="Beginner" className="font-[300] cursor-pointer">
              Beginner
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="Intermediate"
              name="Intermediate"
            />
            <label htmlFor="Intermediate" className="font-[300] cursor-pointer">
              Intermediate
            </label>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="checkbox-filter"
              type="checkbox"
              id="Expert"
              name="Expert"
            />
            <label htmlFor="Expert" className="font-[300] cursor-pointer">
              Expert
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
