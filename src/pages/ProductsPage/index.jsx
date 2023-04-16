import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { productFormSchema } from '../../validations/productFormSchema'
import ProductTable from '../../components/ProductTable'
import { KEY_PRODUCT_LIST } from '../../constants/common'
import './style.scss'
import useScrollToTop from '../../hooks/useScrollToTop'

// Tạo form nhập thông tin hàng hóa và in ra màn hình dưới dạng list để quản lý
// form gồm các field:
// - mã hàng (SKU): ví dụ SP001
// - Tên: ví dụ Lego Bumblebee
// - loại ngành hàng:  tạo select option với các giá trị (toys, food, education, book)
// - số lượng
// - giá nhập
// - giá bán
// - có nút submit
// - có validate cho tất cả các field, yêu cầu điền tất cả
// - lưu dữ liệu vào localStorage
// - tính tổng số lượng tiền hàng của tất cả mặt hàng trong kho
// - UI tùy chọn, tự thiết kế

const initialFormValues = {
  productId: '',
  productName: '',
  productType: 'education',
  productQuantity: '',
  inputPrice: '',
  salePrice: '',
}

const ProductPage = () => {
  useScrollToTop()
  const methods = useForm({
    defaultValues: initialFormValues,
    resolver: yupResolver(productFormSchema)
  })
  const { control, handleSubmit, formState: { errors }, reset } = methods
  const [productList, setProductList] = useState(
    JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST)) || []
  )

  const onValid = (values) => {
    setProductList([values, ...productList])
    localStorage.setItem(KEY_PRODUCT_LIST, JSON.stringify([values, ...productList]))
    reset(initialFormValues)
  }

  return (
    <div className='product-page'>
      <form className='product-form' onSubmit={handleSubmit(onValid)}>
        <div className='product-form__gr-input'>
          <label>Mã hàng</label>
          <Controller
            name='productId'
            control={control}
            render={({ field: { onChange, value } }) => {
              return <input
                type={"text"}
                placeholder="Ma hang"
                onChange={onChange}
                value={value}
              />
            }}
          />
          {!!errors.productId && <p className='product-form__gr-err-mess' style={{ color: 'red', fontSize: 12 }}>{errors.productId?.message}</p>}
        </div>
        <div className='product-form__gr-input'>
          <label>Tên hàng</label>
          <Controller
            name='productName'
            control={control}
            render={({ field }) => {
              return <input type={"text"} placeholder="Ten hang" {...field} />
            }}
          />
          {!!errors.productName && <p className='product-form__gr-err-mess' style={{ color: 'red', fontSize: 12 }}>{errors.productName?.message}</p>}
        </div>
        <div className='product-form__gr-input'>
          <label>Loại ngành hàng</label>
          <Controller
            name='productType'
            control={control}
            render={({ field }) => {
              return <select {...field}>
                <option value={"toys"}>Toys</option>
                <option value={"food"}>Food</option>
                <option value={"education"}>Education</option>
                <option value={"book"}>Book</option>
              </select>
            }}
          />
        </div>
        <div className='product-form__gr-input'>
          <label>Số lượng</label>
          <Controller
            name='productQuantity'
            control={control}
            render={({ field }) => {
              return <input type={"number"} placeholder="So luong" {...field} />
            }}
          />
          {!!errors.productQuantity && <p className='product-form__gr-err-mess' style={{ color: 'red', fontSize: 12 }}>{errors.productQuantity?.message}</p>}
        </div>
        <div className='product-form__gr-input'>
          <label>Gía nhập</label>
          <Controller
            name='inputPrice'
            control={control}
            render={({ field }) => {
              return <input type={"number"} placeholder="Gía nhập" {...field} />
            }}
          />
          {!!errors.inputPrice && <p className='product-form__gr-err-mess' style={{ color: 'red', fontSize: 12 }}>{errors.inputPrice?.message}</p>}
        </div>
        <div className='product-form__gr-input'>
          <label>Giá bán</label>
          <Controller
            name='salePrice'
            control={control}
            render={({ field }) => {
              return <input type={"number"} placeholder="Giá bán" {...field} />
            }}
          />
          {!!errors.salePrice && <p className='product-form__gr-err-mess' style={{ color: 'red', fontSize: 12 }}>{errors.salePrice?.message}</p>}
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>

      <ProductTable productList={productList} />
      <div style={{ height: 5000 }}></div>
    </div>
  )
}

export default ProductPage
