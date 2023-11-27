import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/navbar/logo.png';
import '../../css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBagShopping, faGrip, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BsGrid } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [catOpen, setCatOpen] = useState(false)
    const [dropMenu, setDropMenu] = useState(false)
    
  return (
    <div className='max-w-[1660px] h-[90px] mx-auto px-[16px] sm:px-5 flex items-center justify-between'>
        {/* Navbar Left  */}
        <div className='flex items-center w-[48%] gap-x-[50px]'>
            <div className='max-w-[150px]'>
                <Link to='/'><img src={LogoImg} alt="" /></Link>
            </div>
            {/* Menus */}
            <div className='hidden xl:block'>
                <div className='flex items-center gap-x-8'>
                    <Link className='text-secondary hover:text-primary transition duration-300'>Home</Link>
                    <Link className='text-secondary hover:text-primary transition duration-300'>Courses</Link>
                    <div className='dropdown'>
                        <div className='flex items-center gap-2 text-secondary hover:text-primary transition duration-300'>
                            <Link className=''>Pages</Link>
                            <FontAwesomeIcon className='text-[12px] mt-[3px]' icon={faAngleDown} />
                        </div>
                        <div className='page-dropdown'>
                            <Link className='text-secondary dropdown-link'>About Us</Link>
                            <Link className='text-secondary dropdown-link'>Our Instructors</Link>
                            <Link className='text-secondary dropdown-link'>Our  Mentors</Link>
                            <Link className='text-secondary dropdown-link'>Our Events</Link>
                            <Link className='text-secondary dropdown-link'>Asked Question</Link>
                            <Link className='text-secondary dropdown-link'>Contact</Link>
                        </div>
                    </div>
                    <Link className='text-secondary hover:text-primary transition duration-300'>Shop</Link>
                    <Link className='text-secondary hover:text-primary transition duration-300'>Blog</Link>
                </div>
            </div>
        </div>
        {/* Navbar Right  */}
        <div className='flex items-center w-[52%] justify-end gap-[30px]'>
            {/* Navbar category and search  */}
            <div className='hidden md:block'>
                <div className='flex items-center box-border'>
                    {/* Navbar Categories  */}
                        <div>
                            <div onClick={()=> setCatOpen(!catOpen)} className={`flex items-center gap-[8px] border-[#d0dae9] border-r-0 border rounded-[4px] py-[10px] px-[14px] relative cursor-pointer ${catOpen ? 'border-b-0' : ''}`}>
                                <FontAwesomeIcon className='text-primary' icon={faGrip} />
                                <span className='text-secondary text-[14px]'>Categories</span>
                                <FontAwesomeIcon className='text-[14px] mt-[3px]' icon={faAngleDown} />

                                {catOpen? <div className='cate-dropdown'>
                                <span className='text-secondary'>Business</span>
                                <span className='text-secondary'>Design</span>
                                <span className='text-secondary'>Development</span>
                                <span className='text-secondary'>Health & Fitness</span>
                                <span className='text-secondary'>Marketing</span>
                                <span className='text-secondary'>Math</span>
                                <span className='text-secondary'>Photography</span>
                            </div> : ""}
                            </div>
                        </div>
                    {/* Navbar Search  */}
                    <form className='relative w-[300px] flex items-center'>
                        <input type="text" placeholder='Search For Course...' className='text-[14px] border-[#d0dae9] border rounded-[4px] py-[10px] px-[10px] w-[100%] absolute' />
                        <button className='absolute right-[10px]'><FontAwesomeIcon className='text-[#778191]' icon={faMagnifyingGlass} /></button>
                    </form>
                </div>
            </div>
            {/* Navbar cart and button  */}
            <div className='flex items-center gap-[35px]'>
                <Link>
                    <div className='relative'>
                        <FontAwesomeIcon className='text-[26px] text-secondary' icon={faBagShopping} />
                        <span className='absolute top-[-10px] right-[-16px] bg-primary text-white w-[25px] h-[25px] flex items-center justify-center rounded-full text-[12px]'>0</span>
                    </div>
                </Link>
                <button className='btn-login hidden xl:block'>Login</button>
                <div className='block xl:hidden'>
                    <div className="drawer drawer-end">
                        <input id="Mobile-nav" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Mobile Hamber Icon */}
                            <label htmlFor="Mobile-nav" className="text-primary text-[35px]"><BsGrid /></label>
                        </div> 
                        <div className="drawer-side">
                            <label htmlFor="Mobile-nav" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="w-80 min-h-full bg-white py-6">
                            {/* Mobile side Navbar */}
                                <div>
                                    <div className='px-5 mb-10'>
                                        <div className='max-w-[140px] block mb-10'><Link><img src={LogoImg} alt="" /></Link></div>
                                        <form className='relative flex items-center bg-[#e7effc]'>
                                            <input type="text" placeholder='Search here...' className='text-[14px] rounded-[4px] py-[12px] px-[10px] w-[100%] absolute bg-[#e7effc]' />
                                            <button className='absolute right-[10px]'><FontAwesomeIcon className='text-[#3f3f3f]' icon={faMagnifyingGlass} /></button>
                                        </form>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Link className='nav-link-mobile'>Home</Link>
                                        <Link className='nav-link-mobile'>Courses</Link>
                                        <div className=''>
                                            <div onClick={()=> setDropMenu(!dropMenu)} className='flex items-center justify-between nav-link-mobile'>
                                                <Link className=''>Pages</Link>
                                                <FiPlus className='bg-primary text-[28px] p-[4px] rounded-sm text-white' />
                                            </div>
                                            <div className={`${dropMenu ? 'drop-mobile-menus-show' : 'drop-mobile-menus-hide'}`}>
                                                <div className='flex flex-col gap-[5px]'>
                                                    <Link className='nav-link-mobile-drop'>About Us</Link>
                                                    <Link className='nav-link-mobile-drop'>Our Instructors</Link>
                                                    <Link className='nav-link-mobile-drop'>Our  Mentors</Link>
                                                    <Link className='nav-link-mobile-drop'>Our Events</Link>
                                                    <Link className='nav-link-mobile-drop'>Asked Question</Link>
                                                    <Link className='nav-link-mobile-drop'>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <Link className='nav-link-mobile'>Shop</Link>
                                        <Link className='nav-link-mobile'>Blog</Link>
                                    </div>
                                    <div className='flex justify-center items-center gap-[8px] mt-[30px]'>
                                        <button className='btn-login'>Login</button>
                                        <button className='btn-register'>Register</button>
                                    </div>
                                    {/* Social icons  */}
                                    <div className='flex justify-center items-center gap-[10px] mt-[30px]'>
                                        <FaFacebookF className='social-icon' />
                                        <FaTwitter className='social-icon' />
                                        <RiInstagramLine className='social-icon' />
                                        <FaLinkedinIn className='social-icon' />
                                        <FaTelegramPlane className='social-icon' />
                                    </div>
                                </div>
                                <label htmlFor="Mobile-nav" aria-label="close sidebar" className="absolute top-[28px] right-[10px] text-primary text-[22px]"><IoMdClose /></label>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
