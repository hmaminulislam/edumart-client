import React from "react";
import Hero from "../../components/Hero";
import ClientSlider from "../../components/client-slider/ClientSlider";
import Discover from "../../components/discover/Discover";
import Featured from "../../components/featured/Featured";
import Browse from "../../components/browse/Browse";
import TopInstructor from "../../components/top-instructor/TopInstructor";
import LatestBlog from "../../components/latest-blog/LatestBlog";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientSlider />
      <Discover />
      <Featured />
      <Browse/>
      <TopInstructor />
      <LatestBlog/>
    </div>
  );
}
