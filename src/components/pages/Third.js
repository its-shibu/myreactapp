import React from 'react'
import First from './First'
import { Link } from 'react-router-dom'

const Third = () => {
  return (
    <>
      <First></First>
      <br/>
      <Link className='custom-link' to={'/'}>From third page</Link>
    </>
  )
}

export default Third
