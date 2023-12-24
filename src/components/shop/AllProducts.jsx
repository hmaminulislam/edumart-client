import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../../css/courses/all-courses.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoFilterSharp, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProductCard from "../cards/product-card/ProductCard";
import { useGetProductsQuery } from "../../redux/api/api";

export default function AllProducts() {

  // all products get by redux api 
  const { data, isLoading, error } = useGetProductsQuery(undefined)

  console.log(error)

  // sort active handle 
  const [sortOpen, setSortOpen] = useState(false);
  const [sortName, setSortName] = useState("Newest");
  const sortBtn = useRef();
  const sortBtnEleIcon2 = useRef();
  const sortElement = useRef();
  window.addEventListener("click", (e) => {
    if (
      e.target !== sortBtn.current &&
      e.target !== sortElement.current &&
      e.target !== sortBtnEleIcon2.current
    ) {
      setSortOpen(false);
    }
  });

  // set sort name
  const handleSort = (e) => {
    const sortName = e.target.innerText;
    setSortName(sortName);
  };

  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top  */}
        <div className="flex flex-row items-center justify-between">
          {/* left  */}
          <div>
            <div className="hidden md:block">
              <div className="flex items-center lg:gap-[30px] gap-[20px]">
                {/* search */}
                <div className="relative py-[20px] px-[10px] flex items-center lg:w-[300px] w-[240px]">
                  <input
                    className="all-course-search-field absolute left-0 top-0 w-full h-full pr-[20px] pl-8 border border-[#cdcfd5] rounded-[4px]"
                    type="text"
                    placeholder="Search"
                  />
                  <IoSearch className="absolute left-[10px]" />
                </div>
                {data ? (
                  <p className="text-neutral font-[300]">
                    Showing all {data?.length} results
                  </p>
                ) : (
                  <p className="text-neutral font-[300]">
                    Showing all 0 results
                  </p>
                )}
              </div>
            </div>
            <div className="md:hidden">
              {/* Mobile filter sidebar */}
              <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="flex items-center gap-[6px] border-[#d0dae9] border rounded-[4px] py-[10px] px-[14px]"
                  >
                    <IoFilterSharp />
                    <span className="text-secondary text-[14px]">Filter</span>
                  </label>
                </div>
                <div className="drawer-side z-[999]">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="px-4 pb-4 pt-[4rem] w-80 min-h-full bg-white">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="absolute right-[10px] top-[10px]"
                    >
                      <IoCloseSharp className="text-[20px] text-white p-[2px] w-[30px] h-[30px] bg-primary rounded-[2px]" />
                    </label>
                    {/* filter bars  */}
                    <div className="lg:w-[25%] md:w-[28%]">
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
                            <label
                              htmlFor="finance"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              htmlFor="project"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              htmlFor="graphic"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              htmlFor="ui"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              htmlFor="3d"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              htmlFor="javascript"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              htmlFor="Wordpress"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              htmlFor="PHP"
                              className="font-[300] cursor-pointer"
                            >
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
                            <label
                              htmlFor="Seo"
                              className="font-[300] cursor-pointer"
                            >
                              Seo (1)
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* filter item  */}
                      <div className="filter-card border border-[#ececec] rounded-[8px] py-[30px] px-[30px] md:px-[20px] lg:px-[30px] mb-[30px]">
                        <h4 className="text-[20px] text-secondary filter-title-underline">
                          Top Products
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="flex items-center gap-[10px]">
            <div className={`relative border-[#d0dae9] border rounded-[4px]`}>
              <button
                ref={sortBtn}
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-[8px] justify-between py-[10px] px-[14px] cursor-pointer sm:w-[200px] w-[180px] text-secondary text-[14px]"
              >
                {sortName}
                <FaChevronDown
                  onClick={() => setSortOpen(!sortOpen)}
                  ref={sortBtnEleIcon2}
                  className="text-[14px] mt-[3px]"
                />
              </button>
              {sortOpen && (
                <div ref={sortElement} className="sort-items">
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Oldest
                  </span>
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Price High To Low
                  </span>
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Price Low To High
                  </span>
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Product Title (A-Z)
                  </span>
                  <span
                    onClick={(e) => handleSort(e)}
                    className="text-secondary text-[14px] sort-item"
                  >
                    Product Title (Z-A)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* all courses */}
        <div className="flex flex-col md:flex-row gap-[30px] mt-[40px]">
          {/* filter bars  */}
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
                  <label
                    htmlFor="finance"
                    className="font-[300] cursor-pointer"
                  >
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
                  <label
                    htmlFor="project"
                    className="font-[300] cursor-pointer"
                  >
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
                  <label
                    htmlFor="graphic"
                    className="font-[300] cursor-pointer"
                  >
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
                  <label
                    htmlFor="javascript"
                    className="font-[300] cursor-pointer"
                  >
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
                  <label
                    htmlFor="Wordpress"
                    className="font-[300] cursor-pointer"
                  >
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
          {/* all course card */}
          {data && (
            <div className="lg:w-[75%] md:w-[72%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
              {data?.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          )}
          {/* loading element */}
          {isLoading && (
            <div className="lg:w-[75%] md:w-[72%] flex items-start justify-center mt-[40px] md:mt-[100px]">
              <span className="loading text-primary loading-dots loading-lg"></span>
            </div>
          )}
          {/* fetch error  */}
          {!isLoading && error && (
            <div className="lg:w-[75%] md:w-[72%] flex justify-center mt-[40px] md:mt-[100px]">
              <h3 className="text-center text-[22px] sm:text-[35px] text-secondary font-[600]">No Result Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
