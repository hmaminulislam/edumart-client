import React from 'react'
import Hero from '../../components/Hero'
import ClientSlider from '../../components/client-slider/ClientSlider'
import Discover from '../../components/discover/Discover'

export default function Home() {
  return (
    <div>
        <Hero/>
        <ClientSlider/>
        <Discover/>
    </div>
  )
}
