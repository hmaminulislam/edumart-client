import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import AllCourses from '../../components/courses/AllCourses'

export default function Courses() {
  return (
      <div>
          <CommonHero pageName={'Courses'} />
          <AllCourses/>
    </div>
  )
}
