import React from 'react'

export default function Pagination({ totalCourses, coursePerPage, setCurrentPage, currentPage }) {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalCourses / coursePerPage); i++) {
      pages.push(i);
    }
  return (
    <div className="flex items-center justify-center gap-[10px] pt-[30px]">
      {pages?.map((page) => (
        <button
          onClick={() => setCurrentPage(page)}
          className={`py-[8px] px-[18px] rounded-[4px] text-[18px] font-[500] ${
            page === currentPage ? "bg-primary text-white" : "bg-[#E7EFFC] text-secondary"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
