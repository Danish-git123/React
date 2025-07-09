import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
// This is for the content between the Header and Footer note that Header shoud always be there and footer should also be present Outlet do this works it is used to design the web pages

export default Layout