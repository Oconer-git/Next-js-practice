import React from 'react'

interface Props {
    params: {slug: string[]}
}
const ProductDetailPage = ({params: {slug}}: Props) => {
  return (
    <div>
      Product Detail Page {slug}
    </div>
  )
}

export default ProductDetailPage
