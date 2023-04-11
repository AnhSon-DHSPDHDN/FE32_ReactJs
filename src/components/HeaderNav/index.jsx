import React from 'react'
import { APP_ROUTER } from '../../constants/router'
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <div>
      <ul>
        <li><Link to={APP_ROUTER.HOME_PAGE}>Home</Link></li>
        <li><Link to={APP_ROUTER.PRODUCTS_PAGE}>Products</Link></li>
        <li><Link to={APP_ROUTER.ABOUT_PAGE}>About</Link></li>
      </ul>
      <button>Logout</button>
    </div>
  )
}

export default HeaderNav
