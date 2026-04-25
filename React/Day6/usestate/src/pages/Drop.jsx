import React, { useState } from 'react'

const Dropdown = () => {
  const [option, setOption] = useState('')

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">Select Option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <h1>
          {option === "yes" && "You selected Yes"}
          {option === "no" && "You selected No"}
          {option === "" && "Please select an option"}
        </h1>

      </div>
    </>
  )
}

export default Dropdown