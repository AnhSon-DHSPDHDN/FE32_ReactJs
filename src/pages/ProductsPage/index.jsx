import React, { useEffect, useState } from 'react'

const initialValue = {
  productName: "",
  productType: "",
  productDescription: ""
}

const mockData = {
  product_name: "Son Sieu Xe",
  product_type: "Lambogini",
  product_description: "Super car"
}

const ProductPage = () => {
  const [formState, setFormState] = useState(initialValue)
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => { // fake call api
      setData(mockData)
    }, 2000)
  }, [])

  useEffect(() => {
    if (!data) return

    setFormState({
      productName: data.product_name,
      productType: data.product_type,
      productDescription: data.product_description
    })
  }, [data])

  const handleOnChange = (event) => {
    const { value, name } = event.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log(formState);
    setFormState(initialValue)
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name='productName'
            value={formState.productName}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Product Type:</label>
          <input
            type="text"
            name='productType'
            value={formState.productType}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Product Description:</label>
          <input
            type="text"
            name='productDescription'
            value={formState.productDescription}
            onChange={handleOnChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ProductPage
