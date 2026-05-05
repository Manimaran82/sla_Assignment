import React, { useRef } from 'react'

const Focus = () => {
    const userRef = useRef(null)

    const hand = ()=>{
        userRef.current.focus()
    }

  return (
    <>
    <input type="text" ref={userRef} placeholder='Enter the Name'/>
    <button onClick={hand}>Focus On</button>
    </>
  )
}

export default Focus
