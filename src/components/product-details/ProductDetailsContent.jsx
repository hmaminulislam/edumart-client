import React, { useState } from 'react'
import { FaMinus, FaPlus, FaRegHeart, FaRegStar } from 'react-icons/fa';
import productImg from '../../assets/shop/product_01.png'
import { Link } from 'react-router-dom';
import emptyImg from '../../assets/course-details/emptystate.svg'

export default function ProductDetailsContent() {
    const [openDescrip, setOpenDescrip] = useState(true)
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* product details */}
        <div className="flex items-center">
          <div className="sm:w-[45%]">
            <img
              className="bg-[#f6f6f6] max-h-[500px]"
              src={productImg}
              alt=""
            />
          </div>
          <div className="sm:w-[55%]">
            <h3 className="text-secondary text-[30px] font-[600]">
              Book Cover Design
            </h3>
            <div className="flex items-center gap-[10px] mb-[6px] mt-[4px]">
              <div className="flex items-center gap-[4px]">
                <FaRegStar className="text-yellow-500" />
                <FaRegStar className="text-yellow-500" />
                <FaRegStar className="text-yellow-500" />
                <FaRegStar className="text-yellow-500" />
                <FaRegStar className="text-yellow-500" />
              </div>
              <p className="text-secondary font-[300]">(0.00)</p>
            </div>
            <p className="text-primary text-[24px] font-[500]">$36.00</p>
            <p className="text-neutral mt-[10px]">
              Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
              consectetur Vesti at bulum nec odio aea the dumm summ ipsum that
              dolocons rsus mal suada and fadolorit to the consectetur elit.
            </p>
            <div className="mt-[20px] flex items-center gap-[25px]">
              <div className="flex items-center justify-center border border-[#e1e1e1] rounded-[6px] max-w-[115px]">
                <span className="p-[10px] cursor-pointer">
                  <FaMinus className="text-secondary text-[10px]" />
                </span>
                <span className="text-secondary border-x border-[#e1e1e1] px-[20px] py-[12px]">
                  0
                </span>
                <span className="p-[10px] cursor-pointer">
                  <FaPlus className="text-secondary text-[10px]" />
                </span>
              </div>
              <button className="bg-primary text-white border border-primary py-[12px] sm:px-[32px] px-[24px] rounded-[6px] hover:bg-white hover:text-primary transition duration-300">
                Add To Cart
              </button>
            </div>
            <button className="flex items-center gap-[6px] text-primary cursor-pointer mt-[20px] hover:text-neutral transition duration-200">
              <FaRegHeart />
              <span>Add to Wishlist</span>
            </button>
            <div className="w-[100%] h-[1px] bg-[#e1e1e1] mt-[30px]"></div>
            <div className="mt-[20px]">
              <p className="text-secondary mb-[6px]">
                Categories :{" "}
                <span className="font-[300]">Art & Design, Finance</span>
              </p>
              <p className="text-secondary">
                Tags : <span className="font-[300]">Cover, UX/UI</span>
              </p>
            </div>
          </div>
        </div>
        {/* products description reviews  */}
        <div className="mt-[40px]">
          <div className="flex items-center gap-[25px]">
            <button
              onClick={() => setOpenDescrip(true)}
              className={`text-[22px] font-[500] border-b-[2px] pb-[6px] ${
                openDescrip
                  ? "border-primary text-primary"
                  : "border-white text-secondary"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setOpenDescrip(false)}
              className={`text-[22px] font-[500] border-b-[2px] pb-[6px] ${
                !openDescrip
                  ? "border-primary text-primary"
                  : "border-white text-secondary"
              }`}
            >
              Reviews
            </button>
          </div>
          {openDescrip ? (
            <div className="mt-[25px]">
              <p>
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec odio aea the dumm summ
                ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. y to follow tutorials, Exercises, and
                solutions. This course does start from the beginning with very
                little knowledge and gives a great overview of common tools used
                for data science and progresses into more.
              </p>
            </div>
          ) : (
            <div className="mt-[25px]">
              <img src={emptyImg} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
