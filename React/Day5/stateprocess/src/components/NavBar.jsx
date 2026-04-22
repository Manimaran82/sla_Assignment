import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-blue-500 text-2xl text-white p-4">
        <div>
          <h1>Logo</h1>
        </div>

        <div className="flex items-center justify-center gap-10 ">
          <Link to="/" className="rounded-2xl bg-black text-amber-50">Count</Link>
          <Link to="/color" className="rounded-2xl bg-black text-amber-50" >Color</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar