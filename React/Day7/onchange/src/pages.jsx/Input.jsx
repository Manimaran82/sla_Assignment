import React, { useState } from 'react'

const Input = () => {
    const [name, setName] = useState("");
  return (
    <>
     <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h2>{name}</h2>
      </div>
    </>
  )
}

export default Input
