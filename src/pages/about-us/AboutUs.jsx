import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import WeAre from '../../components/about-us/we-are/WeAre'
import Grow from '../../components/about-us/grow/Grow'
import TopInstructor from '../../components/home/top-instructor/TopInstructor'
import Offer from '../../components/about-us/offer/Offer'
import FeaturedEvent from '../../components/about-us/featured-event/FeaturedEvent'


export default function About() {
  return (
    <div>
      <CommonHero pageName={'About Us'} />
      <WeAre />
      <Grow />
      <TopInstructor />
      <Offer />
      <FeaturedEvent/>
    </div>
  )
}
