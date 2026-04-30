import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({
    userName: "",
    userSeat: "",
    userStatus: "",
  });

  const [show, setShow] = useState([]);

  const get = () => {
    const stored = JSON.parse(localStorage.getItem("todo")) || [];
    setShow(stored);
  };

  useEffect(() => {
    get();
  }, []);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("todo")) || [];
    existing.push(data);

    localStorage.setItem("todo", JSON.stringify(existing));

    alert("Successfully booked");
    setData({ userName: "", userSeat: "", userStatus: "" });

    get(); // refresh table
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Ticket Booking
      </h1>

      {/* Form */}
      <form
        onSubmit={changeSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="userName"
          value={data.userName}
          onChange={changeData}
          placeholder="Enter Name"
          className="w-full p-2 border rounded-lg"
        />

        <input
          type="number"
          name="userSeat"
          value={data.userSeat}
          onChange={changeData}
          placeholder="Seat Number"
          className="w-full p-2 border rounded-lg"
        />

        <input
          type="text"
          name="userStatus"
          value={data.userStatus}
          onChange={changeData}
          placeholder="Payment Status"
          className="w-full p-2 border rounded-lg"
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Book Ticket
        </button>
      </form>

      {/* Table */}
      <div className="mt-8 w-full max-w-3xl">
        <table className="w-full bg-white shadow-lg rounded-2xl overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">S.No</th>
              <th className="p-3">Name</th>
              <th className="p-3">Seat</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {show.map((e, i) => (
              <tr key={i} className="text-center border-b">
                <td className="p-2">{i + 1}</td>
                <td>{e.userName}</td>
                <td>{e.userSeat}</td>
                <td>{e.userStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;