import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [data,setData] = useState([])
   
    useEffect(()=>{
         const fetchData = async ()=>{
        const getData = await fetch ("https://dummyjson.com/users")
        const change = await getData.json()
        setData(change.users)
        
    }
    fetchData()
    },[])
  return (
    <>
    <table className="w-full border border-red-800 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
            <tr>
                <th className="py-3 px-4 border">S:No</th>
                <th className="py-3 px-4 border">Name</th>
                <th className="py-3 px-4 border">Gender</th>
                <th className="py-3 px-4 border">Select</th>
            </tr>
        </thead>
        <tbody>
            {data.map((e)=>(
        <tr className="text-center hover:bg-gray-100 transition">
            <td className="py-2 px-4 border" key={e.id}>{e.id}</td>
            <td className="py-2 px-4 border font-medium">{e.firstName}</td>
            <td className="py-2 px-4 border capitalize">{e.gender}</td>
            <td className="py-2 px-4 border">
                <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">
                    Select
                </button>
            </td>
        </tr>
    
    ))}
        </tbody>
    </table>
   
    </>
  )
}

export default Fetch