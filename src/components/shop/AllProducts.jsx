import React, { useRef, useState } from "react";
import "../../css/courses/all-courses.css";
import ProductCard from "../cards/product-card/ProductCard";
import { useGetProductsQuery } from "../../redux/api/api";
import Sidebar from "./sidebar/Sidebar";
import TopBar from "./Topbar/TopBar";
import { useSelector } from "react-redux";

export default function AllProducts() {

  // all products get by redux api 
  const { data, isLoading, error } = useGetProductsQuery(undefined)

  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top  */}
        <TopBar data= {data} />
        {/* all courses */}
        <div className="flex flex-col md:flex-row gap-[30px] mt-[40px]">
          {/* filter bars  */}
          <Sidebar />
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
