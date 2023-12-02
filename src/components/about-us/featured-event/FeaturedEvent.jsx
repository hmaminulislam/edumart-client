import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import EventCard from '../../cards/event-card/EventCard';

export default function FeaturedEvent() {
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* top  */}
        <div className="flex flex-col md:flex-row md:items-center sm:gap-[30px] justify-between">
          <div>
            <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
              Featured Events
            </span>
            <h2 className="sm:text-[36px] text-[28px] font-[600] text-secondary section-title mt-[15px] mb-[12px]">
              Upcoming<span className="text-primary"> Events</span>
            </h2>
          </div>
          <div>
            <button className="flex items-center justify-center gap-2 bg-white text-primary border border-primary py-[13px] sm:px-[32px] px-[24px] rounded-[6px] hover:bg-primary hover:text-white transition duration-300">
              Our All Events <FaArrowRight />
            </button>
          </div>
        </div>
        {/* event content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]">
          {data.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

// dummy data 
const data = [
    { name: "1" },
    { name: "1" },
    { name: "1" },
];