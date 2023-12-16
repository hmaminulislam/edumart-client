import React, { useEffect, useState } from 'react'
import EventCard from '../cards/event-card/EventCard'
import { useGetEventsQuery } from '../../redux/api/api'

export default function Events() {
  const { data, isLoading, error } = useGetEventsQuery(undefined)
  return (
      <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
          <div className="container-main">
              {/* event content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]">
          {data && data.events.map((events, index) => (
            <EventCard events={events} key={index} />
          ))}
        </div>
        {isLoading && <div className='flex items-center justify-center'><span className="loading text-primary loading-dots loading-lg"></span></div>}
          </div>
    </div>
  )
}