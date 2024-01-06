import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/navbar/logo.png";
import "../../css/navbar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBagShopping,
  faGrip,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { BsGrid } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Navbar() {
  const [catOpen, setCatOpen] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);

  // element select for useref
  const cateBtn = useRef();
  const cateBtnEleIcon1 = useRef();
  const cateBtnEleIcon2 = useRef();
  const cateBtnEle = useRef();
  const cateElement = useRef();

  // category menu close other side click
  window.addEventListener("click", (e) => {
    if (
      e.target !== cateBtn.current &&
      e.target !== cateElement.current &&
      e.target !== cateBtnEle.current &&
      e.target !== cateBtnEleIcon1.current &&
      e.target !== cateBtnEleIcon2.current
    ) {
      setCatOpen(false);
    }
  });
  return (
    <div className="max-w-[1660px] h-[90px] mx-auto px-[16px] sm:px-5 flex items-center justify-between">
      {/* Navbar Left  */}
      <div className="flex items-center w-[48%] gap-x-[50px]">
        <div className="max-w-[150px]">
          <Link to="/">
            <img src={LogoImg} alt="logo" />
          </Link>
        </div>
        {/* Menus */}
        <div className="hidden xl:block">
          <div className="flex items-center gap-x-8">
            <NavLink
              to="/"
              className="text-secondary hover:text-primary transition duration-300 nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className="text-secondary hover:text-primary transition duration-300 nav-link"
            >
              Courses
            </NavLink>
            <div className="dropdown">
              <div className="flex items-center gap-2 text-secondary hover:text-primary transition duration-300 cursor-pointer">
                <span>Pages</span>
                <FontAwesomeIcon
                  className="text-[12px] mt-[3px]"
                  icon={faAngleDown}
                />
              </div>
              <div className="page-dropdown">
                <NavLink
                  to="/about-us"
                  className="text-secondary dropdown-link nav-link"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/our-instructors"
                  className="text-secondary dropdown-link nav-link"
                >
                  Our Instructors
                </NavLink>
                <NavLink
                  to="/our-events"
                  className="text-secondary dropdown-link nav-link"
                >
                  Our Events
                </NavLink>
                <NavLink
                  to="/faq"
                  className="text-secondary dropdown-link nav-link"
                >
                  Asked Question
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-secondary dropdown-link nav-link"
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/shop"
              className="text-secondary hover:text-primary transition duration-300 nav-link"
            >
              Shop
            </NavLink>
            <NavLink
              to="/blog"
              className="text-secondary hover:text-primary transition duration-300 nav-link"
            >
              Blog
            </NavLink>
          </div>
        </div>
      </div>
      {/* Navbar Right  */}
      <div className="flex items-center w-[52%] justify-end gap-[30px]">
        {/* Navbar category and search  */}
        <div className="hidden md:block">
          <div className="flex items-center box-border">
            {/* Navbar Categories  */}
            <div>
              <div
                className={`relative border-[#d0dae9] border-r-0 border rounded-[4px]`}
              >
                <button
                  ref={cateBtn}
                  onClick={() => setCatOpen(!catOpen)}
                  className="flex items-center gap-[8px] py-[10px] px-[14px] cursor-pointer w-[100%]"
                >
                  <FontAwesomeIcon
                    ref={cateBtnEleIcon1}
                    onClick={() => setCatOpen(!catOpen)}
                    className="text-primary"
                    icon={faGrip}
                  />
                  <span
                    onClick={() => setCatOpen(!catOpen)}
                    ref={cateBtnEle}
                    className="text-secondary text-[14px]"
                  >
                    Categories
                  </span>
                  <FontAwesomeIcon
                    onClick={() => setCatOpen(!catOpen)}
                    ref={cateBtnEleIcon2}
                    className="text-[14px] mt-[3px]"
                    icon={faAngleDown}
                  />
                </button>
                {catOpen ? (
                  <div ref={cateElement} className="cate-dropdown">
                    <span className="text-secondary font-[300] cursor-pointer py-[6px] px-[8px] hover:bg-[#D7E1FF] transition duration-300">
                      Business
                    </span>
                    <span className="text-secondary font-[300] cursor-pointer py-[6px] px-[8px] hover:bg-[#D7E1FF] transition duration-300">
                      Design
                    </span>
                    <span className="text-secondary font-[300] cursor-pointer py-[6px] px-[8px] hover:bg-[#D7E1FF] transition duration-300">
                      Development
                    </span>
                    <span className="text-secondary font-[300] cursor-pointer py-[6px] px-[8px] hover:bg-[#D7E1FF] transition duration-300">
                      Health
                    </span>
                    <span className="text-secondary font-[300] cursor-pointer py-[6px] px-[8px] hover:bg-[#D7E1FF] transition duration-300">
                      Marketing
                    </span>
                    <span className="text-secondary font-[300] cursor-pointer py-[6px] px-[8px] hover:bg-[#D7E1FF] transition duration-300">
                      Math
                    </span>
                    <span className="text-secondary font-[300] cursor-pointer py-[6px] px-[8px] hover:bg-[#D7E1FF] transition duration-300">
                      Photography
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* Navbar Search  */}
            <form className="relative w-[300px] flex items-center">
              <input
                type="text"
                placeholder="Search For Course..."
                className="text-[14px] border-[#d0dae9] border rounded-[4px] py-[10px] px-[10px] w-[100%] absolute"
              />
              <button className="absolute right-[10px]">
                <FontAwesomeIcon
                  className="text-[#778191]"
                  icon={faMagnifyingGlass}
                />
              </button>
            </form>
          </div>
        </div>
        {/* Navbar cart and button and mobile side navbar  */}
        <div className="flex items-center gap-[35px]">
          <Link>
            <div className="relative">
              <HiOutlineShoppingBag
                className="text-[26px] text-secondary"
                icon={faBagShopping}
              />
              <span className="absolute top-[-10px] right-[-16px] bg-primary text-white w-[25px] h-[25px] flex items-center justify-center rounded-full text-[12px]">
                0
              </span>
            </div>
          </Link>
          <button className="btn-login hidden xl:block">Login</button>
          <div className="block xl:hidden">
            <div className="drawer drawer-end">
              <input
                id="Mobile-nav"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Mobile Hamber Icon */}
                <label
                  htmlFor="Mobile-nav"
                  className="text-primary sm:text-[30px] md:text-[35px] text-[25px] cursor-pointer"
                >
                  <BsGrid />
                </label>
              </div>
              <div className="drawer-side z-[99]">
                <label
                  htmlFor="Mobile-nav"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="w-80 min-h-full bg-white py-6">
                  {/* Mobile side Navbar */}
                  <div>
                    <div className="px-5 mb-[20px]">
                      <div className="max-w-[140px] block mb-[20px]">
                        <Link to="/">
                          <img src={LogoImg} alt="logo" />
                        </Link>
                      </div>
                      <div className="relative block bg-[#e7effc]">
                        <form className="flex items-center h-[45px]">
                          <input
                            type="text"
                            placeholder="Search here..."
                            className="text-[14px] rounded-[4px] py-[12px] px-[10px] w-[100%] absolute bg-[#e7effc]"
                          />
                          <button className="absolute right-[10px]">
                            <FontAwesomeIcon
                              className="text-[#3f3f3f]"
                              icon={faMagnifyingGlass}
                            />
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <NavLink to="/" className="nav-link-mobile">
                        Home
                      </NavLink>
                      <NavLink to="/courses" className="nav-link-mobile">
                        Courses
                      </NavLink>
                      <div className="">
                        <div
                          onClick={() => setDropMenu(!dropMenu)}
                          className="flex items-center justify-between nav-link-mobile"
                        >
                          <span>Pages</span>
                          <FiPlus className="bg-primary text-[28px] p-[4px] rounded-sm text-white cursor-pointer" />
                        </div>
                        <div
                          className={`${
                            dropMenu
                              ? "drop-mobile-menus-show"
                              : "drop-mobile-menus-hide"
                          }`}
                        >
                          <div className="flex flex-col">
                            <NavLink
                              to="/about-us"
                              className="nav-link-mobile-drop"
                            >
                              About Us
                            </NavLink>
                            <NavLink
                              to="/our-instructors"
                              className="nav-link-mobile-drop"
                            >
                              Our Instructors
                            </NavLink>
                            <NavLink
                              to="/our-events"
                              className="nav-link-mobile-drop"
                            >
                              Our Events
                            </NavLink>
                            <NavLink to="/faq" className="nav-link-mobile-drop">
                              Asked Question
                            </NavLink>
                            <NavLink
                              to="/contact"
                              className="nav-link-mobile-drop"
                            >
                              Contact
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <NavLink to="/shop" className="nav-link-mobile">
                        Shop
                      </NavLink>
                      <NavLink to="/blog" className="nav-link-mobile">
                        Blog
                      </NavLink>
                    </div>
                    <div className="flex justify-center items-center gap-[8px] mt-[30px]">
                      <button className="btn-login">Login</button>
                      <Link to='/sign-up' className="btn-register">Register</Link>
                    </div>
                    {/* Social icons  */}
                    <div className="flex justify-center items-center gap-[10px] mt-[30px]">
                      <FaFacebookF className="social-icon" />
                      <FaTwitter className="social-icon" />
                      <RiInstagramLine className="social-icon" />
                      <FaLinkedinIn className="social-icon" />
                      <FaTelegramPlane className="social-icon" />
                    </div>
                  </div>
                  <label
                    htmlFor="Mobile-nav"
                    aria-label="close sidebar"
                    className="absolute top-[28px] right-[10px] text-primary text-[22px]"
                  >
                    <IoMdClose className="cursor-pointer" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
