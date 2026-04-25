import React, { useState } from 'react'

const Number = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 gap-10">
        <h1>Count : {count}</h1>

        <button 
          onClick={() => setCount(count + 1)} 
          className="bg-blue-600 text-white w-40 py-2 rounded"
        >
          Increment
        </button>

        <button className="bg-amber-400 text-black w-40 py-2 rounded">
          {count % 2 === 0 ? "Even" : "Odd"}
        </button>
      </div>
    </>
  )
}

export default Number