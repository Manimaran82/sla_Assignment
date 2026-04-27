import React, { useState } from 'react'

const Number = () => {
    
const [num, setNum] = useState("");
  return (
   <>
   <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="number"
          placeholder="Enter number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <h2>
          {num === ""
            ? "Enter a number"
            : num % 2 === 0
            ? "Even"
            : "Odd"}
        </h2>
      </div>
   </>
  )
}

export default Number
