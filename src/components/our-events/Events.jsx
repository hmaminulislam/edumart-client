import React from 'react'
import EventCard from '../cards/event-card/EventCard'
import { useGetEventsQuery } from '../../redux/api/eventsApi'

export default function Events() {
  const { data, isLoading, error } = useGetEventsQuery(undefined)
  console.log(data, isLoading, error)
  return (
      <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
          <div className="container-main">
              {/* event content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]">
          {dataDummy.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
          </div>
    </div>
  )
}

// dummy data 
const dataDummy = [
    { name: "1" },
    { name: "1" },
    { name: "1" },
  ];