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
import Product from './components/pages/Product'
import Productspage from './components/pages/Productspage'
import Services from './components/pages/Services'
import Blogs from './components/pages/Blogs'
import Contact from './components/pages/Contact'
import UseStateHooks from './Hooks/UseStateHooks'
import FetchData from './Hooks/FetchData'
import Display from './components/pages/Display'



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
         <Route path='/products' element={<Productspage/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/blogs' element= {<Blogs/>}/>  
         <Route path ='/contact' element={<Contact/>}/> 
         <Route path='/usestatehooks' element = {<UseStateHooks/>}/>
         <Route path='/axiosfetch' element = {<FetchData/>}/>
         <Route path='/info' element={<Display/>}/>
         </Routes>
      </Router>
    </>
  )
}

export default MyRoustes
