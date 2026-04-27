import React, { useState } from 'react'

const Live = () => {
    const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    setResult(input);
  };
  return (
    <>
     <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <br /><br />

        <button onClick={handleClick}>
          Show
        </button>

        <h2>{result}</h2>
      </div>
    </>
  )
}

export default Live
