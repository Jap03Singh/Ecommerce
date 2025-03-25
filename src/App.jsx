import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Order from './pages/Order'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 w-full sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
    </div>
  )
}

export default App
