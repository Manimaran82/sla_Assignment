import React, { useState } from 'react'

const Color = () => {
const [color,setColor] = useState("bg-blue-600")

const ChangeRed =()=>{
    setColor("bg-red-500")
}
const changeBlue =()=>{
    setColor("bg-yellow-600")
}
const changeGreen =()=>{
    setColor("bg-green-800")
}


  return (
    <>
    <div className='flex flex-col gap-4 justify-center items-center my-7 '>
        <h1 className={`bg-fuchsia-800 ${color} w-90 h-100 flex justify-center items-center text-white`}>Color Box</h1>
        <button onClick={ChangeRed} className='bg-red-800 text-white w-40 flex justify-center items-center '>Red</button>
        <button onClick={changeBlue} className='bg-yellow-600 text-white w-40 flex justify-center items-center '>Yellow</button>
         <button onClick={changeGreen} className='bg-green-600 text-white w-40 flex justify-center items-center '>Green</button>
    </div>
    </>
  )
}

export default Color
