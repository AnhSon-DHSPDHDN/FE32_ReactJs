import React from 'react'

const ProductTable = ({ productList }) => {
  const renderProductList = (products) => {
    return products.map((product, index) => {
      return <tr key={index}>
        <td>{product.productId}</td>
        <td>{product.productName}</td>
        <td>{product.productType}</td>
        <td>{product.productQuantity}</td>
        <td>{product.inputPrice}</td>
        <td>{product.salePrice}</td>
      </tr>
    })
  }

  const computedInputPriceAllProduct = productList.reduce((prevTotal, product) => {
    return prevTotal + Number(product.inputPrice) * Number(product.productQuantity)
  }, 0)

  let sum = 0
  for (let i = 0; i < productList.length; i++) {
    sum += Number(productList[i].inputPrice) * Number(productList[i].productQuantity)
  }

  console.log(computedInputPriceAllProduct);
  console.log(sum, 'sum ne');

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
