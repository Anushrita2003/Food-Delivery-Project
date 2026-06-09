import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

// Admin Panel components and pages
import AdminNavbar from './components/AdminNavbar/AdminNavbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [showLogin, setShowLogin] = useState(false)
  const url = import.meta.env.VITE_API_URL || "http://localhost:4000"

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Routes>
        {/* Admin Route Layout */}
        <Route path='/admin/*' element={
          <div className="admin-app">
            <AdminNavbar />
            <hr />
            <div className="app-content">
              <Sidebar />
              <Routes>
                <Route path='add' element={<Add url={url} />} />
                <Route path='list' element={<List url={url} />} />
                <Route path='orders' element={<Orders url={url} />} />
              </Routes>
            </div>
          </div>
        } />

        {/* Customer Route Layout */}
        <Route path='/*' element={
          <>
            <div className='app'>
              <Navbar setShowLogin={setShowLogin} />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/order' element={<PlaceOrder />} />
                <Route path='/verify' element={<Verify />} />
                <Route path='/myorders' element={<MyOrders />} />
              </Routes>
            </div>
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
  