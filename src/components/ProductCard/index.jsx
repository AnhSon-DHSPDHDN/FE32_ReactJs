import React from 'react'
import ProductName from './ProductName'
import './styles.scss'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className='product-card__img'>
        <img
          src={product.img}
          alt='#'
        />
      </div>
      <ProductName product={product} />
    </div>
  )
}

export default ProductCard
