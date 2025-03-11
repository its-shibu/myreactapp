import React from 'react'
import { Link } from 'react-router-dom'

const Second = () => {
  return (
    <>
      This is second component
      <Link to='/' style={{'color':'red', 'backgroundColor' : 'skyblue', 'fontSize' : '30px', 'textDecoration' : 'none'}}>Go to home page</Link>
      {/* JSON format - {"Key" : "Value"}*/}
    </>
  )
}

export default Second
