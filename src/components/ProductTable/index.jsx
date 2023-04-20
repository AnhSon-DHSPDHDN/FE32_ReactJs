import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { APP_ROUTER } from '../../constants/router'
import { actDeleteProductById } from '../../redux/features/product/productSlice'

const ProductTable = ({ productList }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const renderProductList = (products) => {
    return products.map((product, index) => {
      return <tr key={index}>
        <td>{product.productId}</td>
        <td>{product.productName}</td>
        <td>{product.productType}</td>
        <td>{product.productQuantity}</td>
        <td>{product.inputPrice}</td>
        <td>{product.salePrice}</td>
        <td>
          <div>
            <button onClick={() => dispatch(actDeleteProductById(product.id))}>Delete</button>
            <button onClick={() => handleGoEditProduct(product.id)}>Edit</button>
          </div>
        </td>
      </tr>
    })
  }

  const handleGoEditProduct = (id) => {
    navigate(`${APP_ROUTER.HOME_PAGE}/${APP_ROUTER.PRODUCTS_PAGE}/${id}`)
  }

  const computedInputPriceAllProduct = productList.reduce((prevTotal, product) => {
    return prevTotal + Number(product.inputPrice) * Number(product.productQuantity)
  }, 0)

  return (
    <div>
      <h3>Tong so tien hang la: {computedInputPriceAllProduct}</h3>
      <table>
        <thead>
          <tr>
            <th>Mã hàng</th>
            <th>Tên hàng</th>
            <th>Loại ngành hàng</th>
            <th>Số lượng</th>
            <th>Giá nhập</th>
            <th>Giá bán</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderProductList(productList)}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
