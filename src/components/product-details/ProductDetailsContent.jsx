import React, { useState } from 'react'
import { FaMinus, FaPlus, FaRegHeart, FaRegStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import emptyImg from '../../assets/course-details/emptystate.svg'
import { useGetProductByIdQuery } from '../../redux/api/api';

export default function ProductDetailsContent() {

    // description state 
  const [openDescrip, setOpenDescrip] = useState(true)
  
  const {id} = useParams()
  // get product redux api
  const { data, isloading, error } = useGetProductByIdQuery(id)
  
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* product details */}
        <div className="flex flex-col md:flex-row sm:items-start md:items-center items-center gap-[40px]">
          <div className="md:w-[45%] bg-[#f6f6f6] md:p-[40px] p-[20px]">
            <img
              className="max-h-[500px] max-w-[200px] md:max-w-[260px] md:mx-auto"
              src={data?.img}
              alt=""
            />
          </div>
          <div className="md:w-[55%]">
            <h3 className="text-secondary text-[24px] sm:text-[30px] font-[600]">
              {data?.name}
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
            <p className="text-primary text-[20px] sm:text-[24px] font-[500]">
              ${data?.price}
            </p>
            <p className="text-neutral font-[300] sm:font-[400] mt-[10px]">
              {data?.description}
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
                <span className="font-[300]">{data?.category}</span>
              </p>
              <p className="text-secondary">
                Tags :{" "}
                {data?.tags?.map((tag, i, arr) => (
                  <span key={i} className="font-[300]">{tag?.name}{i != arr?.length - 1 ? ',' : ""} </span>
                ))}
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
                {data?.description}
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
