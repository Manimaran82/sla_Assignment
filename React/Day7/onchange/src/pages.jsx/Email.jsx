import React, { useState } from 'react'

const Email = () => {
    const [email, setEmail] = useState("");
  return (
  <>
  <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h2>
          {email === "" ? "Enter Email" : email}
        </h2>
      </div>
  </>
  )
}

export default Email
