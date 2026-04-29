import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  <>
  <div className='bg-blue-700 text-white flex justify-between items-center p-5 '>
    <div>Logo</div>
    <div className='flex gap-5'>
        <Link to="/">Fetch</Link>
        <Link to="/form">Form</Link>
        <Link to="/array">Array</Link>

    </div>
  </div>
  </>
  )
}

export default NavBar
