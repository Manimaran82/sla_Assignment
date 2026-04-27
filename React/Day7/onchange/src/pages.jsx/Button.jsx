import React, { useState } from 'react'

const Button = () => {
    const [text, setText] = useState("");
  return (
   <>
    <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter something"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <br /><br />

        <button disabled={text === ""}>
          Submit
        </button>
      </div>
   </>
  )
}

export default Button
