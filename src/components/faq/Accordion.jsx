import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const AccordionSection = ({
  item,
  isActiveAccordion,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleAccordion = () => {
    const nextIndex = isActiveAccordion ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div onClick={toggleAccordion}>
      <div
        className={`flex items-center justify-between gap-[10px] py-[20px] sm:px-[30px] px-[14px] ${
          isActiveAccordion
            ? "bg-primary text-white"
            : "bg-[#E6F2FF] text-secondary cursor-pointer"
        }`}
      >
        <h4 className="sm:w-[90%] w-[88%] sm:text-[22px] text-[16px] sm:font-[500] font-[400]">{item.ques}</h4>
        {isActiveAccordion ? (
          <FaMinus className="w-[35px] h-[35px] flex items-center justify-center text-primary p-[8px] bg-white rounded-full" />
        ) : (
          <FaPlus className={`w-[35px] h-[35px] flex items-center justify-center rounded-full p-[8px] ${isActiveAccordion ? 'bg-white text-primary' : 'bg-secondary text-white'} `} />
        )}
      </div>

      {isActiveAccordion && (
        <p className="text-neutral font-[300] py-[20px] px-[30px] bg-[#E6F2FF]">
          {item.ans}
        </p>
      )}
    </div>
  );
};

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* faq item  */}
        <div className="flex flex-col gap-[5px] max-w-[900px] mx-auto">
          {data.map((item, index) => (
            <div key={index}>
              <AccordionSection
                item={item}
                isActiveAccordion={index === activeIndex}
                setActiveIndex={setActiveIndex}
                sectionIndex={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    ques: "What is Learn Well System?",
    ans: "Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur. Sorem ipsum dolor sit amet consectetu.",
  },
  {
    ques: "What is included in Standard membership plan?",
    ans: "Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur. Sorem ipsum dolor sit amet consectetu.",
  },
  {
    ques: "How to choose the right class for me?",
    ans: "Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur. Sorem ipsum dolor sit amet consectetu.",
  },
  {
    ques: "Can I pause my Premium membership plan any time?",
    ans: "Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur. Sorem ipsum dolor sit amet consectetu.",
  },
  {
    ques: "How does th Affiliate Program work?",
    ans: "Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur. Sorem ipsum dolor sit amet consectetu.",
  },
  {
    ques: "How we provide services for you?",
    ans: "Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur. Sorem ipsum dolor sit amet consectetu.",
  },
  {
    ques: "Where can I download the LearnWell app?",
    ans: "Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur. Sorem ipsum dolor sit amet consectetu.",
  },
  {
    ques: "How we became best among others?",
    ans: "Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur. Sorem ipsum dolor sit amet consectetu.",
  },
];
