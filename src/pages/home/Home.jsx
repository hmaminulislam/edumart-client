import React from "react";
import Hero from "../../components/home/hero/Hero";
import ClientSlider from "../../components/home/client-slider/ClientSlider";
import Discover from "../../components/home/discover/Discover";
import Featured from "../../components/home/featured/Featured";
import Browse from "../../components/home/browse/Browse";
import TopInstructor from "../../components/home/top-instructor/TopInstructor";
import LatestBlog from "../../components/home/latest-blog/LatestBlog";
import Testimonial from "../../components/home/testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientSlider />
      <Discover />
      <Featured />
      <Browse />
      {/* <Testimonial/> */}
      <TopInstructor />
      <LatestBlog/>
    </div>
  );
}
