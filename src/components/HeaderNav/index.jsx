import React from 'react'
import { APP_ROUTER } from '../../constants/router'
import { Link } from 'react-router-dom'
import './style.scss'

const HeaderNav = () => {
  return (
    <div className='header-nav'>
      <ul className='header-nav__wrapper'>
        <li className='header-nav__menu-item'>
          <Link to={APP_ROUTER.HOME_PAGE}>Home</Link>
        </li>
        <li className='header-nav__menu-item'>
          <Link to={APP_ROUTER.PRODUCTS_PAGE}>Products</Link>
        </li>
        <li className='header-nav__menu-item'>
          <Link to={APP_ROUTER.ABOUT_PAGE}>About</Link>
        </li>
      </ul>
      <button className='header-nav__btn-logout'>Logout</button>
    </div>
  )
}

export default HeaderNav
