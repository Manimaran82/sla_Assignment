import React, { useRef } from 'react'

const Button = () => {
  const inputRef = useRef(null)

  const handleClear = () => {
    inputRef.current.value = ""
    inputRef.current.focus()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Clear Input
        </h2>

        <input
          type="text"
          ref={inputRef}
          placeholder="Enter something"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleClear}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default Button