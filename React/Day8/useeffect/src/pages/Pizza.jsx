import React, { useEffect, useState } from 'react'

const Pizza = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://dummyjson.com/recipes")
            const result = await res.json()
            setData(result.recipes )
        }
        fetchData()
    }, [])

    return (
        <>
            <h1>Recipe Table</h1>

            <table border="3" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "10px" }}>Id</th>
                        <th style={{ padding: "10px" }}>Name</th>
                        <th style={{ padding: "10px" }}>Ingredients</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((e) => (
                        <tr key={e.id}>
                            <td style={{ padding: "10px", textAlign: "center" }}>{e.id}</td>
                            <td style={{ padding: "10px" }}>{e.name}</td>
                            <td style={{ padding: "10px" }}>
                                {e.ingredients.join(", ")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Pizza