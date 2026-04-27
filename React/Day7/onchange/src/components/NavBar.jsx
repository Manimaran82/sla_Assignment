import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='bg-blue-600 text-black flex justify-between items-center gap-5 p-5'>
        <div>Logo</div>

        <div className='flex gap-5'>
            <Link to="/">Input</Link>
            <Link to="/email">Email</Link>
            <Link to="/password">Password</Link>
            <Link to="/uppercase">Uppercase</Link>
            <Link to="/count">Count</Link>
            <Link to="/num">Number</Link>
            <Link to="/reverse">Reverse</Link>
            <Link to="/button">Button</Link>
            <Link to="/field">Field</Link>
            <Link to="/live">Live</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar
