import React, { useState } from 'react'

const Theme = () => {
  const [theme, setTheme] = useState(false)

  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <>
      <div className={`${theme ? "bg-black text-white" : "bg-white text-black"} h-screen flex justify-center items-center`}>
        <button 
          onClick={changeTheme}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          {theme ? "Light" : "Dark"}
        </button>
      </div>
    </>
  )
}

export default Theme