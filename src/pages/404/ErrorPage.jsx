import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function ErrorPage() {
  return (
    <div>
      <Navbar />
      <CommonHero pageName={'Page Not Found'} />
      {/* 404 content  */}
      <div className='2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]'>
      <div className='container-main flex flex-col items-center justify-center'>
        <h2 className='text-primary lg:text-[200px] md:text-[150px] text-[80px] font-[700] leading-[100%]'>404</h2>
        <h3 className='text-secondary font-[600] md:text-[38px] text-[24px] max-w-[620px] mx-auto text-center md:mb-[30px] mb-[20px]'>Sorry, the page you are looking for could not be found</h3>
        <Link to="/">
              <button className="flex items-center justify-center gap-2 bg-primary text-white border border-primary py-[13px] sm:px-[32px] px-[24px] rounded-[6px] hover:bg-secondary transition duration-300">
                Back To Home
              </button>
            </Link>
        </div>
        </div>
      <Footer />
    </div>
  )
}
