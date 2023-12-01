import React from 'react'
import '../../../css/about-us/grow.css'
import icon1 from '../../../assets/about-us/grow/classroom.png'
import icon2 from '../../../assets/about-us/grow/homework.png'
import icon3 from '../../../assets/about-us/grow/trophy.png'
import icon4 from '../../../assets/about-us/grow/world.png'
import CountUp from "react-countup";

export default function Grow() {
  return (
    <div className="grow 2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* Top */}
        <div className="text-center max-w-[480px] mx-auto">
          <span className="text-primary py-[6px] px-[10px] bg-[#e7effc] text-[15px] rounded-[4px]">
            Worldwide Our Achievement
          </span>
          <h2 className="sm:text-[36px] text-[28px] font-[600] text-secondary section-title mt-[15px] mb-[12px]">
            Grow You <span className="text-primary">Skills </span>To Advance
            Your Career Path
          </h2>
        </div>
        {/* content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* item  */}
          {data.map((item, index) => (
            <div key={index} className='text-center bg-white rounded-[6px] py-[50px] px-[20px] mt-[40px]'>
              <img className='max-w-[70px] mx-auto' src={item.icon} alt="" />
              <CountUp
                start={1}
                end={item.number}
                delay={0}
                duration={4}
                enableScrollSpy={true}
              >
                {({ countUpRef }) => (
                <span className='text-[28px] font-[700] text-primary mt-[14px] mb-[5px] inline-block' ref={countUpRef} />
                )}
                  </CountUp>
                  <p className='text-neutral font-[300]'>{item.taq}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    number: "325200",
    icon: icon1,
    taq: "Students Enrolled",
  },
  {
    number: "11399",
    icon: icon2,
    taq: "Top Class Courses",
  },
  {
    number: "312",
    icon: icon3,
    taq: "World Countries",
  },
  {
    number: "590",
    icon: icon4,
    taq: "Award We Received",
  },
];