
import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './component/Heder/Header'
import Footer from './component/Footer/Footer'

function Layout() {
  return (
    <>
   <Header/>
    <Outlet />
   <Footer />
    </>
  )
}

export default Layout


