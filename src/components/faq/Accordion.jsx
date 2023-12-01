import React from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        {/* faq item  */}
        <div className="flex flex-col gap-[5px] max-w-[900px] mx-auto">
          {data.map((item, index) => (
              <AccordionItem item={item} key={index} />
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
