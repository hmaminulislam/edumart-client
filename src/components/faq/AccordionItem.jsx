import React, { useState } from 'react'
import { FaPlus, FaMinus, FaP } from "react-icons/fa6";

export default function AccordionItem({item}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center justify- gap-[10px] text-[22px] font-[500] py-[20px] px-[30px] ${
          open ? "bg-primary text-white" : "bg-[#E6F2FF] text-secondary"
        }`}
      >
        <h4 className='w-[90%]'>{item.ques}</h4>
        {open ? <FaMinus className='w-[30px]' /> : <FaPlus className='w-[30px]' />}
      </div>

      {open && (
        <p className="text-neutral font-[300] py-[20px] px-[30px] bg-[#E6F2FF]">
          {item.ans}
        </p>
      )}
    </div>
  );
}
