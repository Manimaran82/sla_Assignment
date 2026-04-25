import React, { useState } from 'react'

const Toggle = () => {

    const [toggle,setToggle] =useState(false)

    const change=()=>{

        setToggle(!toggle)
    }
  return (
    <>
    <div className='bg-yellow-800 flex flex-col gap-3 my-6 items-center justify-center w-full'>
         <button onClick={change} className='bg-black text-white flex items-center w-20 rounded'>Toggle</button>
      <div className='flex justify-center items-center  bg-blue-700 text-white'>
         { toggle&&<p>login sucessfully</p>}
         
      </div>
       
    </div>
    </>
  )
}

export default Toggle
