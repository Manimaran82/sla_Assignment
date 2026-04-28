import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const getData = await fetch("https://dummyjson.com/todos")
            const changeData = await getData.json()
            setData(changeData.todos || [])
        }
        fetchData()
    }, [])

    return (
        <>
            <h1>Todo App</h1>

            <table  border="3" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Todo</th>
                        <th>Complete</th>
                        <th>UserId</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.todo}</td>
                            <td>{e.completed.toString()}</td>
                            <td>{e.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Todo