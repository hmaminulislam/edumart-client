import React from 'react'
import { useGetBlogsQuery } from '../../../redux/api/api';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { categorySet } from '../../../redux/features/blog/blogSlice';

export default function BlogCategory() {

    // get blogs from redux api 
    const { data, isLoading, error } = useGetBlogsQuery(undefined)

    // category find and setup 
    let categories = [];

    if (data) {
        data?.map((blog) => {
            categories.push(blog.category)
        })
    } 

    // redux hook
    const dispatch = useDispatch()
    const { category } = useSelector((state) => state.blog)
    
    // page redirect blog and category state set
    // const location = useLocation()
    // const url = location.pathname;

    // const handleCate = (e) => {
    //     const cate = e.target.innerText;
    //     dispatch(categorySet(cate))

    //     if (url !== '/blog') {
    //          redirect('/')
    //     }
    // }

  return (
    <div className="border border-[#ececec] py-[30px] px-[20px] rounded-[8px] sm:mb-[30px] mb-[20px] event-cont-right-box">
      <h3 className="text-[20px] font-[500] text-secondary event-underline-title">
        Categories
      </h3>
      <div className="flex flex-col gap-[10px] mt-[35px]">
        <Link
          onClick={() => dispatch(categorySet('All'))}
          className={`${
            category === "All"
              ? "text-primary font-[400]"
              : "text-secondary font-[300]"
          }`}
        >
          All
        </Link>
        {categories?.map((cate, index) => (
          <Link
            onClick={() => dispatch(categorySet(cate))}
            key={index}
            className={`${
              cate === category
                ? "text-primary font-[400]"
                : "text-secondary font-[300]"
            }`}
          >
            {cate}
          </Link>
        ))}
      </div>
    </div>
  );
}
