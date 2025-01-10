import React from 'react'
import Header from '../Header'
import { Outlet } from "react-router-dom"
import Footer from '../Footer'

const Mainlayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Mainlayout