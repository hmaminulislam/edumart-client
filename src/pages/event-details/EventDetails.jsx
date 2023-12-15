import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import EventContent from '../../components/event-details/EventContent'
import { useLoaderData } from 'react-router-dom'

export default function EventDetails() {
  // const event = useLoaderData()
  // console.log(event)
  return (
      <div>
          <CommonHero pageName={'Event Details'} />
          <EventContent />
    </div>
  )
}
