import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const handleIncrement = () => {
    const currentCount = count + 1
    setCount(currentCount)
    console.log("Increment ne!!!:   ", currentCount);
  }

  const handleDecrement = () => {
    setCount(count - 1)
    console.log("Decrement ne!!!");
  }

  const handleChangeInput = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  const handleSetCount = () => {
    setCount(Number(inputValue)) // +
    setInputValue('')
  }

  return <div>
    <button onClick={handleIncrement}>Increment</button>
    <span style={{ fontSize: 20, margin: '0 20px' }}>{count}</span>
    <button onClick={handleDecrement}>Decrement</button>
    <div>
      <input type={"number"} value={inputValue} onChange={handleChangeInput} />
      <button onClick={handleSetCount}>Set Count</button>
    </div>
  </div>
}

export default Counter
