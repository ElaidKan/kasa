import { NavLink } from "react-router-dom"
import './navbar.scss'

function Navbar() {
  return (

    <nav className="navbar">
      <img src="./public/logo.png" className="logo" alt="logo" />
      <div className="links">
        <NavLink to="/" className={({ isActive }) => `${isActive && "link"}`}>ACCUEIL</NavLink>
        <NavLink to="/about" className={({ isActive }) => `${isActive && "link"}`}>A PROPOS</NavLink>
      </div>
    </nav>
  )
}

export default Navbar