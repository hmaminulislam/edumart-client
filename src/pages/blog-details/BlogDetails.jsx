import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import BlogDetailsContent from '../../components/blog-details/BlogDetailsContent'

export default function BlogDetails() {
  return (
      <div>
          <CommonHero pageName={"Blog Details"} />
          <BlogDetailsContent />
    </div>
  )
}
