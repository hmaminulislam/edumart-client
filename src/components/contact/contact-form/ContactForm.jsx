import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaRegEnvelope } from "react-icons/fa";
import '../../../css/contact/contact-form.css'

export default function ContactForm() {
  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main flex flex-col md:flex-row lg:gap-[80px] gap-[50px]">
        {/* left  */}
        <div className="md:w-[40%]">
          <h2 className="sm:text-[32px] text-[28px] font-[600] text-socondary contact-form-title">
            Keep In Touch With Us
          </h2>
          <p className="text-neutral font-[300] mt-[22px]">
            Neque convallis cras semper auctor. Libero id faucibus getnvallis.id
            faucibus nisl tincidunt egetnvallis.
          </p>
          <div className="flex flex-col gap-[40px] mt-[35px]">
            {/* item  */}
            <div className="flex items-center gap-[15px]">
              <span className="w-[50px] h-[50px] bg-primary text-white rounded-full flex items-center justify-center">
                <TfiLocationPin className="text-[22px]" />
              </span>
              <div className="flex flex-col gap-[1px]">
                <a
                  href="https://www.google.com/maps/@23.774609,90.4219455,15z?hl=en&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral font-[300] hover:underline transition duration-300"
                >
                  68 Street Holakt Street world
                </a>
                <a
                  href="https://www.google.com/maps/@23.774609,90.4219455,15z?hl=en&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral font-[300] hover:underline transition duration-300"
                >
                  10002 New York
                </a>
              </div>
            </div>
            {/* item  */}
            <div className="flex items-center gap-[15px]">
              <span className="w-[50px] h-[50px] bg-primary text-white rounded-full flex items-center justify-center">
                <VscCallOutgoing className="text-[22px]" />
              </span>
              <div className="flex flex-col gap-[1px]">
                <a
                  href="tel:+88014 0490 6666"
                  rel="noopener noreferrer"
                  className="text-neutral font-[300] hover:underline transition duration-300"
                >
                  +88014 0490 6666
                </a>
                <a
                  href="tel:+88014 0490 8888"
                  rel="noopener noreferrer"
                  className="text-neutral font-[300] hover:underline transition duration-300"
                >
                  +88014 0490 8888
                </a>
              </div>
            </div>
            {/* item  */}
            <div className="flex items-center gap-[15px]">
              <span className="w-[50px] h-[50px] bg-primary text-white rounded-full flex items-center justify-center">
                <FaRegEnvelope className="text-[22px]" />
              </span>
              <div className="flex flex-col gap-[1px]">
                <a
                  href="mailto:info@example.com"
                  rel="noopener noreferrer"
                  className="text-neutral font-[300] hover:underline transition duration-300"
                >
                  info@example.com
                </a>
                <a
                  href="mailto:web@example.com"
                  rel="noopener noreferrer"
                  className="text-neutral font-[300] hover:underline transition duration-300"
                >
                  web@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className="md:w-[60%]">
          <form className="bg-[#F6F7FA] sm:py-[50px] py-[40px] lg:px-[60px] px-[20px] border border-[#DAE0E7] rounded-[8px]">
            <h3 className="text-[22px] font-[500] text-secondary contact-form-title">
              Get in Touch
            </h3>
            <div className="mt-[30px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
                <input
                  className="bg-white py-[12px] px-[10px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-white py-[12px] px-[10px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                  type="email"
                  placeholder="Email*"
                  required
                />
                <input
                  className="bg-white py-[12px] px-[10px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                  type="tel"
                  placeholder="Phone"
                />
                <input
                  className="bg-white py-[12px] px-[10px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field"
                  type="text"
                  placeholder="Subject*"
                  required
                />
              </div>
              <textarea
                name="message"
                id=""
                rows="5"
                placeholder="Message*"
                className="bg-white py-[12px] px-[10px] mt-[25px] mb-[25px] border border-[#DAE0E7] w-full rounded-[4px] text-secondary font-[300] input-field-message outline-none"
              ></textarea>
              <button
                className="bg-primary text-white border border-primary py-[13px] sm:px-[32px] px-[24px] rounded-[6px] hover:bg-white hover:text-primary transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
