import React from 'react'
import { Link } from 'react-router-dom'
import './first.css'

const First = () => {
  return (
    <>
       This is first component 
       <Link to='second' className='custom-link'> Go to second</Link>

       {/* <div className='hello'> hello this is className </div>
       <lable htmlFor = 'hello'> using for</lable> */}
       <br/>
    </>
  )
}

export default First
