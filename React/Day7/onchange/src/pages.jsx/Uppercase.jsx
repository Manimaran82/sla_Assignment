import React, { useState } from 'react'

const Uppercase = () => {
    const [text, setText] = useState("");
  return (
    <>
     <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <h2>{text.toUpperCase()}</h2>
      </div>
    </>
  )
}

export default Uppercase
