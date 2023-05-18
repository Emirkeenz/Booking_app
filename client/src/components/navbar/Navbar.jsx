import "./navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
          <span className="logo">Booking app</span>
        </Link>  
        {user ? user.username : (
          <div className="navItems">
            <Link to="/register"><button className="navButton">Register</button></Link>
            <Link to="/login"><button className="navButton">Login</button></Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar