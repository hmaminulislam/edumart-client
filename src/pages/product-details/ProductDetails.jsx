import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import ProductDetailsContent from '../../components/product-details/ProductDetailsContent'

export default function ProductDetails() {
  return (
      <div>
          <CommonHero pageName={'Product Details'} />
          <ProductDetailsContent />
    </div>
  )
}
