import React from 'react'

const Header = () => {
  console.log("Header => rerender ne!!");

  return (
    <h3>HeaderComponent</h3>
  )
}

export default React.memo(Header)
