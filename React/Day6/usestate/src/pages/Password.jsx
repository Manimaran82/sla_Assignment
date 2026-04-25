import React, { useState } from 'react'

const Password = () => {
    const [password,setPassword] = useState()

    const changePassword =(e)=>{
        const value =e.target.value
        if (value.length > 6) {
            alert("Strong Password")
        }
        else{
            alert("Weak Password")
        }
    }
  return (
    <>
    <input type="text" value={password} onChange={changePassword} placeholder='Enter the Password'/>
    </>
  )
}

export default Password
