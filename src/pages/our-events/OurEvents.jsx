import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import Events from '../../components/our-events/Events'

export default function AllEvents() {
  return (
      <div>
      <CommonHero pageName={'Our Events'} />
      <Events/>
    </div>
  )
}