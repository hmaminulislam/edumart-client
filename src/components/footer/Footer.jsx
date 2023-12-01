import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/footer/secondary_logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../../css/footer/footer.css";

export default function Footer() {
  return (
    <div className="bg-[#061E43]">
      <div className="2xl:pt-[120px] xl:pt-[100px] md:pt-[80px] sm:pt-[60px] pt-[50px]">
        {/* footer content */}
        <div className="container-main flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap sm:gap-[50px] gap-[40px] lg:gap-[15px] md:justify-between justify-center">
          {/* footer item first */}
          <div className="md:w-[300px] sm:w-[44%] text-center sm:text-left">
            <Link to="/">
              <img
                className="max-w-[160px] mx-auto sm:mx-0"
                src={LogoImg}
                alt=""
              />
            </Link>
            <p className="text-[15px] text-white font-[300] my-[14px]">
              When an unknown printer took galley of type and scrambled it to
              make pspecimen bookt has.
            </p>
            <p className="text-white mb-[10px]">463 7TH AVE, NY 10018, USA</p>
            <a rel="noreferrer" href="tel:013-3490-3444" className="text-white">
              013-3490-3444
            </a>
            {/* social icons  */}
            <div className="flex justify-center sm:justify-start gap-[10px] mt-[20px]">
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
          {/* footer item second  */}
          <div className="sm:w-[44%] md:w-[auto] text-center sm:text-left">
            <h4 className="text-[22px] text-white font-[500]">Resources</h4>
            <div className="flex flex-col sm:items-start items-center gap-[10px] sm:mt-[25px] mt-[14px]">
              <Link className="footer-link">About</Link>
              <Link className="footer-link">Contact</Link>
              <Link className="footer-link">Shop</Link>
              <Link className="footer-link">Blog</Link>
              <Link className="footer-link">Events</Link>
            </div>
          </div>
          {/* footer item third  */}
          <div className="sm:w-[44%] md:w-[125px] text-center sm:text-left">
            <h4 className="text-[22px] text-white font-[500]">Courses</h4>
            <div className="flex flex-col sm:items-start items-center gap-[10px] sm:mt-[25px] mt-[14px]">
              <Link className="footer-link">Marketing</Link>
              <Link className="footer-link">Finance</Link>
              <Link className="footer-link">Design</Link>
              <Link className="footer-link">Business</Link>
              <Link className="footer-link">SEO Optimize</Link>
            </div>
          </div>
          {/* footer item forth  */}
          <div className="sm:w-[44%] md:w-[auto] text-center sm:text-left max-w-[350px] sm:max-w-[auto] mx-auto sm:mx-0">
            <h4 className="text-[22px] text-white font-[500]">Working Hours</h4>
            <div className="flex gap-[55px] justify-between border-[#39557E] border-b pb-[14px] mb-[14px] mt-[25px]">
              <p className="text-white font-[500]">Mon - Fri</p>
              <p className="text-[#b2bdcd]">8:00 AM - 5:00 PM</p>
            </div>
            <div className="flex gap-[55px] justify-between border-[#39557E] border-b pb-[14px] mb-[14px]">
              <p className="text-white font-[500]">Mon - Fri</p>
              <p className="text-[#B2BDCD]">8:00 AM - 5:00 PM</p>
            </div>
            <div className="flex gap-[55px] justify-between border-[#39557E] border-b pb-[14px] mb-[14px]">
              <p className="text-white font-[500]">Mon - Fri</p>
              <p className="text-[#B2BDCD]">8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        {/* footer bootom */}
        <div className="h-[1px] w-[100%] bg-[#39557E] 2xl:mt-[120px] xl:mt-[100px] md:mt-[80px] sm:mt-[60px] mt-[50px]"></div>
        <div className="container-main">
          <div className="flex flex-col md:flex-row gap-[15px] items-center justify-between py-[25px] text-[14px] sm:text-base">
            <span className="text-[#B2BDCD] font-[300] text-center md:text-left">
              Copyright © 2023 EduMart. All Rights Reserved.
            </span>
            <div className="flex items-center gap-[10px]">
              <Link className="text-[#B2BDCD] font-[300]">Privacy Policy</Link>
              <span className="h-[4px] w-[4px] bg-[#B2BDCD]"></span>
              <Link className="text-[#B2BDCD] font-[300]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
