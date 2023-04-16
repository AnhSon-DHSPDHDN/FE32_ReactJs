import React from 'react'
import useScrollToTop from '../../hooks/useScrollToTop'

const AboutPage = () => {
  useScrollToTop()

  return (
    <div>
      <h1>AboutPage</h1>
      <div style={{ height: 5000 }}></div>
    </div>
  )
}

export default AboutPage
