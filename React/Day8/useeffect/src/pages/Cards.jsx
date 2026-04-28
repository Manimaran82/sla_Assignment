import React, { useEffect, useState } from 'react'

const Cards = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://dummyjson.com/users")
            const result = await res.json()
            setData(result.users)
        }
        fetchData()
    }, [])

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-5">User Cards</h1>

            <div className="flex flex-wrap justify-center gap-6">
                {data.map((e) => (
                    <div 
                        key={e.id} 
                        className="w-64 border rounded-xl shadow-lg p-4 hover:scale-105 transition"
                    >
                        <img 
                            src={e.image} 
                            alt={e.firstName}
                            className="w-full h-40 object-cover rounded-lg"
                        />

                        <h3 className="text-xl font-semibold mt-3">
                            {e.firstName} {e.lastName}
                        </h3>

                        <p className="text-sm"><b>Email:</b> {e.email}</p>
                        <p className="text-sm"><b>Phone:</b> {e.phone}</p>
                        <p className="text-sm"><b>Age:</b> {e.age}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cards