import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("users")) || [];
    const newData = [...oldData, form];
    localStorage.setItem("users", JSON.stringify(newData));

    alert("Registered Successfully");

    setForm({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2"
        />

        <button type="submit" className="bg-blue-500 text-white p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;