import { Link } from "react-router-dom"

const Navbar =()=>{

return(<>
<div className="bg-black text-white p-2 flex justify-between">
    <div>
        Logo
    </div>
    <div className="flex gap-20 ">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div>
</div>

</>)
}
export default Navbar