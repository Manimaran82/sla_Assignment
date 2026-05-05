import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='bg-blue-800 text-white p-5 flex justify-between items-center'>
    <div>Logo</div>
    <div className='flex gap-10'>
        <Link to="/">Focus</Link>
        <Link to="/input">Input</Link>
         <Link to="/button">Button</Link>
        <Link to="/track">Track</Link>
         <Link to="/timer">Timer</Link>
    </div>
   </div>
   </>
  )
}

export default Navbar
