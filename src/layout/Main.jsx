import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export default function Main() {
  const { pathname } = useLocation()

useEffect(() => {
  scrollTo({top: 0, behavior: "smooth"})
}, [pathname])
  
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
