import React from 'react'
import Component2 from './Component2'

const Component1 = (props) => {
  return (
    <div>
      <Component2
        {...props}
        data5="asd"
      />
    </div>
  )
}

export default Component1
