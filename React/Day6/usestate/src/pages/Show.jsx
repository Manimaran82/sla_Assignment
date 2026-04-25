import React, { useState } from 'react'

const Show = () => {

    const [accept,setAccept] = useState(false)
    const change =()=>{
        setAccept(!accept)
    }

  return (
   <>
   <div className='flex flex-col bg-blue-600 text-black p-2 border my-10 w-40 h-10 justify-center items-center'>
    <h1>{accept?"Accepted ":"Not Accepted"}</h1>
  
   </div>
    <button onClick={change} className='bg-red-800 text-white flex justify-center flex-col items-center rounded p-3'>Click</button>
   </>
  )
}

export default Show
