import React, { useEffect, useState } from 'react'

const FcLifecycle = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component did mount ne::::::");
    const timer = setInterval(() => {
      console.log("Update bitcoin price!");
    }, 1000)

    return () => { // Component will unmount
      clearInterval(timer)
      console.log("Component will unmount ne:::::::");
    }
  }, [])  // => Component did mount

  useEffect(() => {
    if (count === 0) return
    if (count === 11) {
      setCount(0)
    }
    console.log("Component did update ne:::::");
  }, [count]) // Component did update

  return (
    <div id="component-lifecycle">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>InCrement</button>
    </div>
  )
}

export default FcLifecycle
