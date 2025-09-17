import React from 'react'
import {Outlet} from 'react-router-dom'
import Home from './Home/Home'
import Footer from './Footer/Footer'


function Layout() {
  return (
    <>
      <Home/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default Layout