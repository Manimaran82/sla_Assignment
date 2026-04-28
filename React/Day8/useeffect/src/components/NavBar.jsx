import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  <>
  <div className='flex justify-between items-center p-5 bg-blue-800 text-white'>

    <div>Logo</div>
    <div className='flex gap-5'>
      <Link to="/">Todo</Link>
      <Link to="/pizza">Pizza</Link>
      <Link to="/cards">Cards</Link>
    </div>
  </div>
  </>
  )
}

export default NavBar
