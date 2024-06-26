import React from 'react'
import LoginAdmin from './LoginAdmin'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Layout
