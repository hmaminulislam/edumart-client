import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import productImg from "../../../assets/shop/product_01.png";
import "../../../css/card/product-card.css";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegHeart, FaRegEye, FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function ProductCard() {
  const location = useLocation();
  return (
    <div className="relative border flex flex-col items-center justify-center border-[#E8E8E8] rounded-[6px] px-[20px] pt-[10px] pb-[25px]">
      <div>
        <Link to={`/shop/${"name"}`} state={{ prevUrl: location.pathname }}>
          <img src={productImg} alt="" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-[6px]">
        <h3 className="text-primary text-[20px] font-[500]">$39.00</h3>
        <Link>
          <h3 className="text-secondary text-[20px] font-[500]">
            A Million To One
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-[5px]">
          <FaRegStar className="text-yellow-500" />
          <FaRegStar className="text-yellow-500" />
          <FaRegStar className="text-yellow-500" />
          <FaRegStar className="text-yellow-500" />
          <FaRegStar className="text-yellow-500" />
        </div>
      </div>
      {/* cart wishlist view */}
      <div className="absolute top-[20px] right-[10px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <span className="w-[40px] h-[40px] flex items-center justify-center border cursor-pointer border-[#f0f0f0] bg-white rounded-full text-neutral hover:text-white hover:bg-primary transition duration-300">
            <AiOutlineShop className="text-[17px]" />
          </span>
          <span className="w-[40px] h-[40px] flex items-center justify-center border cursor-pointer border-[#f0f0f0] bg-white rounded-full text-neutral hover:text-white hover:bg-primary transition duration-300">
            <FaRegHeart className="text-[17px]" />
          </span>
          {/* view option modal */}
          <label
            htmlFor="Product_Modal"
            className="w-[40px] h-[40px] flex items-center justify-center border cursor-pointer border-[#f0f0f0] bg-white rounded-full text-neutral hover:text-white hover:bg-primary transition duration-300"
          >
            <FaRegEye className="text-[17px]" />
          </label>
          <input type="checkbox" id="Product_Modal" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box w-11/12 max-w-4xl h-[480px] flex flex-col md:flex-row items-center">
              <div className="md:w-[50%]">
                <img
                  className="max-w-[130px] sm:max-w-[200px] md:max-w-[100%]"
                  src={productImg}
                  alt=""
                />
              </div>
              <div className="md:w-[50%] mt-[5px] sm:mt-0">
                <h3 className="text-secondary text-[20px] sm:text-[24px] font-[500]">
                  Book Cover Design
                </h3>
                <p className="text-primary text-[17px] sm:text-[20px] font-[500]">
                  $36.00
                </p>
                <p className="text-neutral text-[14px] sm:text-base font-[300] mt-[5px] sm:mt-[10px]">
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more
                  ametion consectetur Vesti at bulum nec odio aea the dumm summ
                  ipsum that dolocons rsus mal suada and fadolorit to the
                  consectetur elit.
                </p>
                <div className="sm:mt-[20px] mt-[14px] flex items-center sm:gap-[25px] gap-[14px]">
                  <div className="flex items-center justify-center border border-[#e1e1e1] rounded-[6px] max-w-[115px]">
                    <span className="px-[10px] sm:py-[10px] py-[8px] cursor-pointer">
                      <FaMinus className="text-secondary text-[10px]" />
                    </span>
                    <span className="text-secondary border-x border-[#e1e1e1] px-[20px] sm:py-[10px] py-[8px]">
                      0
                    </span>
                    <span className="px-[10px] sm:py-[10px] py-[8px] cursor-pointer">
                      <FaPlus className="text-secondary text-[10px]" />
                    </span>
                  </div>
                  <button className="bg-primary text-[14px] sm:text-base text-white border border-primary py-[10px] sm:px-[32px] px-[14px] rounded-[6px] hover:bg-white hover:text-primary transition duration-300">
                    Add To Cart
                  </button>
                </div>
                <div className="w-[100%] h-[1px] bg-[#e1e1e1] mt-[24px] sm:mt-[30px]"></div>
                <div className="mt-[20px]">
                  <p className="text-secondary text-[15px] sm:text-base mb-[6px]">
                    Categories :{" "}
                    <span className="font-[300]">Art & Design, Finance</span>
                  </p>
                  <p className="text-secondary text-[15px] sm:text-base">
                    Tags : <span className="font-[300]">Cover, UX/UI</span>
                  </p>
                </div>
              </div>
              <label
                className="absolute top-[10px] right-[10px] cursor-pointer"
                htmlFor="Product_Modal"
              >
                <IoClose className="text-secondary text-[25px]" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
