import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import WeAre from '../../components/about-us/we-are/WeAre'


export default function About() {
  return (
    <div>
      <CommonHero pageName={'About Us'} />
      <WeAre/>
    </div>
  )
}
