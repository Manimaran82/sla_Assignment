import React, { useState } from 'react'

const Field = () => {
    const [text, setText] = useState("");
  return (
  <>
  <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Start typing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <h2>
          {text === "" ? "No Input" : "Typing..."}
        </h2>
      </div>
  </>
  )
}

export default Field
