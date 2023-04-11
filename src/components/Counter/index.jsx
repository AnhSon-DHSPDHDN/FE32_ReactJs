import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../redux/features/counter/counterSlice'

const Counter = () => {
  const counter = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleIncrement = () => {
    dispatch(increment(inputValue))
  }

  const handleChangeInput = (e) => {
    if (!isNaN(Number(e.target.value))) {
      setInputValue(Number(e.target.value))
    }

  }

  return (
    <div>
      <input type={"text"} value={inputValue} onChange={handleChangeInput}></input>
      <div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <h3>{counter}</h3>
    </div>
  )
}

export default Counter
