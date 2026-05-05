import React, { useState, useRef, useEffect } from 'react'

const Track = () => {
  const [count, setCount] = useState(0)
  const prevRef = useRef(0)

  useEffect(() => {
    prevRef.current = count   // store current as previous after render
  }, [count])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Counter Tracker
        </h2>

        <p className="text-lg mb-2">
          Current: <span className="font-bold text-blue-600">{count}</span>
        </p>

        <p className="text-lg mb-4">
          Previous: <span className="font-bold text-gray-600">{prevRef.current}</span>
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default Track