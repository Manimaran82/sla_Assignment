import React, { useState } from 'react'

const Button = () => {
    const [hide,setHide]=useState(false)
    const changeButton= ()=>{
        setHide(!hide)
    }
  return (
    <>
    <div className='flex flex-col bg-blue-800 text-white w-60 h-60 mx-10 '>
    {hide?"Displaying text based on login status means showing different content to users depending on whether they are authenticated or not. For example, if a user is logged in, the application can display a welcome message or dashboard, while users who are not logged in may see a prompt to log":"Hide"}
    
    </div>
    <button onClick={changeButton} className='w-20 bg-amber-700 text-white mx-10 '>Click</button>
    </>
  )
}

export default Button
