import React, { useState, useRef } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)

  const handleStart = () => {
    if (intervalRef.current) return // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Timer Control
        </h2>

        <p className="text-3xl font-bold mb-6 text-blue-600">
          {count}s
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleStart}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Start
          </button>

          <button
            onClick={handleStop}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timer