import React, { useRef } from 'react'

const Input = () => {
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form 
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-lg w-80"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">
            Input Form
          </h2>

          <input
            type="text"
            ref={inputRef}
            placeholder="Enter something"
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Input