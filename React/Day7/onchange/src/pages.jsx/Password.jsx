import React, { useState } from 'react'

const Password = () => {
    const [password, setPassword] = useState("");
  return (
  <>
   <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <h2>
          {password.length < 6 ? "Weak" : "Strong"}
        </h2>
      </div>
  </>
  )
}

export default Password
