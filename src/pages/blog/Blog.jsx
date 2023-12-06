import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import BlogAll from '../../components/blog/BlogAll'

export default function Blog() {
  return (
      <div>
          <CommonHero pageName={'Blog'} />
          <BlogAll />
    </div>
  )
}
