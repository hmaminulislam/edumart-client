import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

export default function Main() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <h1>Footer</h1>
    </div>
  )
}
