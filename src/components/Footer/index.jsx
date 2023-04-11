import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const counter = useSelector(state => state.counter.count)

  return (
    <h1>Footer: {counter}</h1>
  )
}

export default Footer
