import React, { useState } from 'react'

const initialValue = {
  productName: "",
  productType: "",
  productDescription: ""
}

const ProductPage = () => {
  const [formState, setFormState] = useState(initialValue)
  const [errorsForm, setErrorsForm] = useState({})

  const handleOnChange = (event) => {
    const { value, name } = event.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const validateForm = (formValues) => {
    let isValid = true
    const errors = {}
    if (formValues.productName === '') {
      isValid = false
      errors.productName = "please input ProductName"
    }
    if (formValues.productType === '') {
      isValid = false
      errors.productType = "please input productType"
    }
    if (formValues.productDescription === '') {
      isValid = false
      errors.productDescription = "please input productDescription"
    }

    setErrorsForm(errors)
    return isValid
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const isValid = validateForm(formState)

    if (isValid) {
      // Submit form
      setErrorsForm({})
      setFormState(initialValue)
    }
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
          {!!errorsForm.productName && <div>{errorsForm.productName}</div>}
        </div>
        <div>
          <label>Product Type:</label>
          <input
            type="text"
            name='productType'
            value={formState.productType}
            onChange={handleOnChange}
          />
          {!!errorsForm.productType && <div>{errorsForm.productType}</div>}
        </div>
        <div>
          <label>Product Description:</label>
          <input
            type="text"
            name='productDescription'
            value={formState.productDescription}
            onChange={handleOnChange}
          />
          {!!errorsForm.productDescription && <div>{errorsForm.productDescription}</div>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ProductPage
