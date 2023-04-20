import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { APP_ROUTER } from '../../constants/router'
import { actUpdateProduct } from '../../redux/features/product/productSlice'
import { productFormSchema } from '../../validations/productFormSchema'
import { actUpdateDetailProduct } from '../../redux/features/product/productSlice'

const initialFormValues = {
  productId: '',
  productName: '',
  productType: 'education',
  productQuantity: '',
  inputPrice: '',
  salePrice: '',
}

const EditProductPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productDetail = useSelector(state => state.products.productDetail)
  const { idProduct } = useParams()

  const methods = useForm({
    defaultValues: initialFormValues,
    resolver: yupResolver(productFormSchema)
  })
  const { control, handleSubmit, formState: { errors }, reset } = methods

  const onValid = (values) => {
    dispatch(actUpdateProduct({ id: idProduct, product: values }))
    handleGoBackProducts()
    reset(initialFormValues)
  }

  const handleGoBackProducts = () => {
    navigate(`${APP_ROUTER.HOME_PAGE}/${APP_ROUTER.PRODUCTS_PAGE}`)
  }

  useEffect(() => {
    if (idProduct) {
      dispatch(actUpdateDetailProduct(idProduct))
    }
  }, [idProduct, dispatch])

  useEffect(() => {
    reset(productDetail)
  }, [productDetail, reset])

  return (
    <div className='product-page'>
      <button onClick={handleGoBackProducts}>Back</button>
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

      <div style={{ height: 5000 }}></div>
    </div>
  )
}

export default EditProductPage
