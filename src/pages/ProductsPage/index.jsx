import React from 'react'
import ProductTable from '../../components/ProductTable'
import './style.scss'
import useScrollToTop from '../../hooks/useScrollToTop'
import { useNavigate } from 'react-router'
import { APP_ROUTER } from '../../constants/router'
import { useSelector } from 'react-redux'

const ProductPage = () => {
  useScrollToTop()
  const navigate = useNavigate()
  const products = useSelector(state => state.products.productList)

  const handleAddProduct = () => {
    navigate(`${APP_ROUTER.HOME_PAGE}/${APP_ROUTER.ADD_PRODUCT}`)
  }

  return (
    <div className='product-page'>
      <div>
        <button onClick={handleAddProduct}>Add</button>
      </div>
      <ProductTable productList={products} />
    </div>
  )
}

export default ProductPage
