import { Link } from "react-router-dom"

const Header=()=>{
    return (
        <div>
            <nav className="flex justify-center bg-indigo-200 py-4 text-2xl">
                <Link className="mr-6" to="/">Home</Link>
                <Link className="mr-6" to="/users">Users</Link>
                <Link className="mr-6" to="/about" >About</Link>
                <Link className="mr-6" to="/contact">Contact Us</Link>
            </nav>
        </div>
    )
}
export default Header