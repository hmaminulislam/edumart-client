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
    <div>
      <div
        onClick={toggleAccordion}
        className={`flex items-center justify-between gap-[10px] py-[20px] sm:px-[30px] px-[14px] border border-[#e0e2ea] cursor-pointer ${
          isActiveAccordion
            ? "bg-[#EFF1F6] text-primary rounded-t-[6px]"
            : "bg-white text-secondary rounded-[6px]"
        }`}
      >
        <h4 className="sm:w-[90%] w-[88%] sm:text-[20px] text-[16px] sm:font-[500] font-[400]">
          {item.ques}
        </h4>
        {isActiveAccordion ? (
          <FaMinus className="text-primary text-[18px]" />
        ) : (
          <FaPlus className="text-primary text-[18px]" />
        )}
      </div>

      {isActiveAccordion && (
          <p className="text-neutral font-[300] pt-[16px] pb-[20px] sm:px-[30px] px-[14px] bg-white border-x border-b border-[#e0e2ea] rounded-b-[6px] text-[15px] sm:text-base">
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
        <div className="flex flex-col gap-[15px] max-w-[900px] mx-auto">
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
    ans: "To find information about the Learn Well System online course, I recommend checking directly on the official website of the course or contacting the organization or individual offering the course. Additionally, you can search for reviews or testimonials from people who have taken the course to get an idea of its content and effectiveness.",
  },
  {
    ques: "What is included in Standard membership plan?",
    ans: "If you're inquiring about a specific platform, website, or service that offers a Standard membership plan, I recommend checking the official website or contacting the customer support of that particular service. They typically provide detailed information about the features and benefits included in each membership plan.",
  },
  {
    ques: "How to choose the right class for me?",
    ans: "Be honest about your current skill level in the subject matter. Some classes are designed for beginners, while others may be more advanced. Choose a class that matches your proficiency.",
  },
  {
    ques: "Can I pause my Premium membership plan any time?",
    ans: "Classes can be offered in various formats, including online courses, in-person classes, workshops, or a combination of these. Choose a format that fits your schedule and learning preferences.",
  },
  {
    ques: "How does th Affiliate Program work?",
    ans: "Look into the qualifications and experience of the instructor. A knowledgeable and experienced instructor can significantly enhance the quality of your learning experience.",
  },
  {
    ques: "How we provide services for you?",
    ans: "If possible, find reviews or testimonials from previous students. This can give you insights into the strengths and weaknesses of the class from the perspective of people who have already taken it.",
  },
  {
    ques: "Where can I download the LearnWell app?",
    ans: "Consider the cost of the class in relation to the value you expect to gain. Some classes may offer certificates or credentials that can enhance your resume or skills profile.",
  },
  {
    ques: "How we became best among others?",
    ans: "Thoroughly read the course descriptions to understand the topics covered, teaching methods, and expected outcomes. This will help you determine if the class aligns with your interests and needs.",
  },
];
