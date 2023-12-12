import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import eventImg from "../../assets/events/event_01.webp";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "../../css/event-details/event-content.css";
import { Link } from "react-router-dom";
import blogSiteImg from "../../assets/blog-card/blog_card.jpg";
import { LuCalendarCheck } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaQuoteRight } from "react-icons/fa";

export default function EventContent() {
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex flex-col md:flex-row gap-[60px] md:gap-[40px]">
        {/* left  */}
        <div className="md:w-[70%] lg:w-[75%]">
          <div className="mb-[30px]">
            <img
              className="lg:h-[500px] h-[300px] sm:h-[320px] rounded-[8px] object-cover w-full"
              src={eventImg}
              alt=""
            />
          </div>
          <h1 className="text-[25px] sm:text-[30px] lg:text-[36px] font-[500] text-secondary">
            Swing Into April (2023 Wallpapers Edition)
          </h1>
          <div className="flex flex-wrap items-center sm:gap-[20px] gap-y-[15px] gap-x-[20px] mt-[20px]">
            <div className="flex items-center gap-[6px]">
              <CiUser className="text-primary text-[18px]" />
              <p className="text-neutral font-[300]">Hasim</p>
            </div>
            <div className="flex items-center gap-[6px]">
              <FaRegCalendarAlt className="text-primary text-[16px]" />
              <p className="text-neutral font-[300]">Feb 15, 2024</p>
            </div>
            <div className="flex items-center gap-[6px]">
              <FaRegComment className="text-primary text-[18px]" />
              <p className="text-neutral font-[300]">No Comments</p>
            </div>
          </div>
          <p className="text-neutral mt-[20px] font-[300]">
            Horem ipsum dolor sitter metting Great consectetur adipiscing
            idealorem ipsum dolor sitter mettingtablished of a page when
            lookinThe point of using Lorem Ipsu ss normal distribution.est, qui
            dolor emr ipsum quia dolor sit ame consec tetur. Esse mo lestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
            et ac cumsan et iusto odio dignissim qui blandit praesent
            consectetur adipiscing idealorem.
          </p>
          <div className="flex justify-between gap-[35px] py-[40px] px-[35px] border-l-[6px] mt-[35px] border-primary bg-[#F1F8FF]">
            <p className="text-secondary font-[500] text-[22px]">
              “ Urabitur varius eros rutrum consequat Mauris sollicitudin enim
              condimentum luctus enim justo non molestie nisl ”
            </p>
            <FaQuoteRight className="text-[100px] text-neutral mt-[-30px]" />
          </div>
          <h4 className="text-neutral text-[22px] mt-[30px] mb-[5px]">
            During this program :
          </h4>
          <p className="text-neutral font-[300]">
            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
            consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum
            that dolocons rsus mal suada and fadolorit.
          </p>
          {/* list items  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] sm:gap-[20px] mt-[30px] sm:mt-[40px]">
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">Become a UX designer.</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">You will be able to add UX designe</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">Become a UI designer.</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">Create quick wireframes.</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsFillCheckCircleFill className="text-primary text-[24px]" />
              <p className="text-neutral">Downloadable exercise files</p>
            </div>
          </div>
          {/* item  */}
          <p className="text-neutral font-[300] mt-[40px]">
            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
            consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum
            that dolocons rsus mal suada and fadolorit.
          </p>
          {/* comment form */}
          <div className="border-t-[1px] border[#E6E6E6] pt-[40px] mt-[50px]">
            <h3 className="text-[22px] font-[500] text-secondary">
              Write a Comment
            </h3>
            <form className="mt-[30px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[25px] gap-[14px]">
                <input
                  className="bg-[#F6F7FA] py-[12px] px-[10px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-[#F6F7FA] py-[12px] px-[10px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                  type="email"
                  placeholder="Email*"
                  required
                />
              </div>
              <input
                className="bg-[#F6F7FA] py-[12px] px-[10px] sm:mt-[25px] mt-[14px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                type="text"
                placeholder="Subject*"
                required
              />
              <textarea
                name="message"
                id=""
                rows="5"
                placeholder="Message*"
                className="bg-[#F6F7FA] py-[12px] px-[10px] sm:my-[25px] my-[14px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field-message outline-none"
              ></textarea>
              <button
                className="bg-primary text-white border border-primary py-[13px] sm:px-[32px] px-[24px] rounded-[6px] hover:bg-white hover:text-primary transition duration-300"
                type="submit"
                disabled={true}
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
        {/* right  */}
        <div className="md:w-[30%] lg:w-[25%]">
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Categories
            </h3>
            <div className="flex flex-col gap-[10px] mt-[35px]">
              <p className="text-secondary font-[300]">Art & Design</p>
              <p className="text-secondary font-[300]">Buniness</p>
              <p className="text-secondary font-[300]">Data Science</p>
              <p className="text-secondary font-[300]">Finance</p>
            </div>
          </div>
          {/* box item  */}
          <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Recent Posts
            </h3>
            <div className="mt-[40px] flex flex-col gap-[22px]">
              {/* blog item  */}
              <Link className="flex items-center gap-[14px]">
                <div className="w-[180px] h-[80px]">
                  <img
                    className="object-cover h-full rounded-[4px]"
                    src={blogSiteImg}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-[500] text-secondary">
                    When aeunkno printer took galley of..
                  </h3>
                  <div className="flex items-center gap-[5px]">
                    <LuCalendarCheck className="text-primary" />
                    <span className="text-[14px] font-[300] text-neutral">
                      Jun 22, 2024
                    </span>
                  </div>
                </div>
              </Link>
              {/* blog item  */}
              <Link className="flex items-center gap-[14px]">
                <div className="w-[180px] h-[80px]">
                  <img
                    className="object-cover h-full rounded-[4px]"
                    src={blogSiteImg}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-[500] text-secondary">
                    When aeunkno printer took galley of..
                  </h3>
                  <div className="flex items-center gap-[5px]">
                    <LuCalendarCheck className="text-primary" />
                    <span className="text-[14px] font-[300] text-neutral">
                      Jun 22, 2024
                    </span>
                  </div>
                </div>
              </Link>
              {/* blog item  */}
              <Link className="flex items-center gap-[14px]">
                <div className="w-[180px] h-[80px]">
                  <img
                    className="object-cover h-full rounded-[4px]"
                    src={blogSiteImg}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-[500] text-secondary">
                    When aeunkno printer took galley of..
                  </h3>
                  <div className="flex items-center gap-[5px]">
                    <LuCalendarCheck className="text-primary" />
                    <span className="text-[14px] font-[300] text-neutral">
                      Jun 22, 2024
                    </span>
                  </div>
                </div>
              </Link>
              {/* blog item  */}
              <Link className="flex items-center gap-[14px]">
                <div className="w-[180px] h-[80px]">
                  <img
                    className="object-cover h-full rounded-[4px]"
                    src={blogSiteImg}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-[500] text-secondary">
                    When aeunkno printer took galley of..
                  </h3>
                  <div className="flex items-center gap-[5px]">
                    <LuCalendarCheck className="text-primary" />
                    <span className="text-[14px] font-[300] text-neutral">
                      Jun 22, 2024
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* box item  */}
          <div
            className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px]
           event-cont-right-box"
          >
            <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-[14px] mt-[30px]">
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Apps
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Art & Design
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Courses
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Education
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Learning
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Programming
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                UI/UX
              </Link>
              <Link className="py-[6px] px-[12px] hover:text-white hover:bg-primary transition duration-300 bg-[#E6F2FF] rounded-[2px] text-primary font-[300] text-[15px]">
                Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}