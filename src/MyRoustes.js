import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import First from './pages/First'
// import Second from './pages/Second'
// import Third from './pages/Third'
import Home from './components/pages/Home'
import Navbar from './components/layouts/Navbar'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'
import Cart from './components/pages/Cart'
const MyRoustes = () => {
  return (
    <>
      <Router>
        <Routes>
         {/* <Route path='/' exact element={<First/>}/>
         <Route path='/second' element={<Second/>}/>
         <Route path='/third' element={<Third/>}/> */}
         <Route path = '/' element={<Home/>} />
         <Route path = '/signin' element = {<Signin/>}/>
         <Route path = '/signup' element = {<Signup/>}/>
         <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default MyRoustes
