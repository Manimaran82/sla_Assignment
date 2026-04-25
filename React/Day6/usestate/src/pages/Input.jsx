import React, { useState } from 'react'

const Input = () => {
  const [text, setText] = useState('')

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-4 py-2 border rounded mb-4"
          placeholder="Type something..."
        />

        <button className="px-4 py-2 bg-gray-800 text-white rounded">
          {text ? "Typing..." : "Empty"}
        </button>
      </div>
    </>
  )
}

export default Input