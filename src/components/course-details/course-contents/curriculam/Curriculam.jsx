import React, { useState } from "react";
import { FaPlus, FaMinus, FaYoutube } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";

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
        className={`flex items-center justify-between gap-[10px] py-[16px] sm:px-[30px] px-[14px] border border-[#e0e2ea] cursor-pointer ${
          isActiveAccordion
            ? "bg-[#EFF1F6] text-primary rounded-t-[6px]"
            : "bg-white text-secondary rounded-[6px]"
        }`}
      >
        <h4 className="sm:w-[90%] w-[88%] sm:text-[20px] text-[15px] sm:font-[500] font-[400]">
          {item?.moduleName}
        </h4>
        {isActiveAccordion ? (
          <FaMinus className="text-primary text-[18px]" />
        ) : (
          <FaPlus className="text-primary text-[18px]" />
        )}
      </div>

      {isActiveAccordion && (
        <div className="bg-white border-x border-b border-[#e0e2ea] rounded-b-[6px]">
          {item.moduleItems?.map((name) => (
            <div className="flex items-center justify-between sm:px-[30px] px-[14px] py-[10px] bg-[white] hover:bg-[rgb(239,241,246)] gap-[8px] trmoduleItemsition duration-300">
              <div className="flex items-center sm:gap-[12px] gap-[8px]">
                <FaYoutube className="text-gray-600 text-[15px] sm:text-base" />
                <p className="text-secondary text-[14px] sm:text-base w-[90%]">{name?.title}</p>
              </div>
              <div className="flex items-center sm:gap-[14px] gap-[6px]">
                <span className="font-[300] text-secondary text-[14px]">
                  07:00
                </span>
                <MdLockOutline className="text-gray-500 sm:text-[20px] text-[16px]" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Curriculam({ course }) {
  const { curriculum } = course;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="mt-[40px]">
      <div>
        {/* faq items  */}
        <div className="flex flex-col gap-[15px] max-w-[900px] mx-auto">
          {curriculum?.map((item, index) => (
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

// const curriculam = [
//   {
//     moduleName: "Installing WordPress Locally",
//     moduleItems: [
//       { title: "How to install WordPress on your PC" },
//       { title: "Closing Down Local Site" },
//       { title: "Desktop Server Updated – Insecure Fix" },
//     ],
//   },
//   {
//     moduleName: "A first look around WordPress",
//     moduleItems: [
//       { title: "The WordPress Dashboard" },
//       { title: "Post & Page Editor" },
//       { title: "The Gutenberg Editor" },
//     ],
//   },
//   {
//     moduleName: "Wordpress settings, Plugins and Themes",
//     moduleItems: [
//       { title: "Setting up a Gravatar" },
//       { title: "Plugins & Adding a Sitemap" },
//       { title: "Allowing Comments & Comment Moderation" },
//     ],
//   },
//   {
//     moduleName: "Website conten with posts and pages",
//     moduleItems: [
//       { title: "WordPress Posts vs WordPress Pages" },
//       { title: "Social Sharing" },
//       { title: "Importance of Post Excerpts" },
//     ],
//   },
//   {
//     moduleName: "WordPress security",
//     moduleItems: [
//       { title: "Introduction to WordPress Security" },
//       { title: "What to Do if a Plugin Locks you Out" },
//       { title: "How to change your WordPress Author Page Name (Advanced)" },
//     ],
//   },
// ];
