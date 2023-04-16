import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderNav from '../../components/HeaderNav'

const HomeLayout = () => {
  return (
    <>
      <HeaderNav />
      <div style={{ marginTop: 70 }}>
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout
