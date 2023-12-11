import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import AllProducts from '../../components/shop/AllProducts'

export default function Shop() {
  return (
    <div>
      <CommonHero pageName={'Our Shop'} />
      <AllProducts />
    </div>
  )
}
