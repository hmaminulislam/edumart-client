import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import EventContent from '../../components/event-details/EventContent'

export default function EventDetails() {
  return (
      <div>
          <CommonHero pageName={'Event Details'} />
          <EventContent />
    </div>
  )
}
