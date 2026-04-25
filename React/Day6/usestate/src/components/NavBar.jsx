import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
  <>
  
  <div className='flex bg-black text-white  p-5 justify-between items-center flex-row'>
    <div>Logo</div>
    <div className=' flex gap-10'>
        <Link to="/">Toggle </Link>
         <Link to="/button">Button </Link>
          <Link to="/theme">Theme </Link>
          <Link to="/input">Input </Link>
          <Link to="/number">Number </Link>
          <Link to="/show">Show</Link>
           <Link to="/password">Password</Link>
            <Link to="/drop">Drop Down</Link>

    </div>
  </div>
  </>
  )
}

export default NavBar
