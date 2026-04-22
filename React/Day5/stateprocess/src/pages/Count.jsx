import { useState } from "react"

const Count = () => {
  const [count, setCount] = useState(0)

  const change = () => {
    setCount(count + 1)
  }
  const changeDec =()=>{
    setCount(count -1)
  }
  const changeRes =()=>{
    setCount(0)
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center gap-3 my-6">
        <h1 className="bg-black text-white flex items-center justify-center w-40 j ">{count}</h1>
        <button onClick={change} className="bg-blue-800 text-black w-40">
          Increase
        </button>
         <button onClick={changeDec} className="bg-red-700 text-black w-40">
          Decrease
        </button>
         <button onClick={changeRes} className="bg-green-600 text-black w-40">
          Reset
        </button>
        
      </div>
    </>
  )
}

export default Count