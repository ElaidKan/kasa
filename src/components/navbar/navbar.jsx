import { NavLink } from "react-router-dom"
import './navbar.scss'
import logoNav from '../../../public/logo.png'

function Navbar() {
  return (

    <nav className="navbar">
      <img src= {logoNav} className="logo" alt="logo" />
      <div className="links">
        <NavLink to="/" className={({ isActive }) => `${isActive && "link"}`}>ACCUEIL</NavLink>
        <NavLink to="/about" className={({ isActive }) => `${isActive && "link"}`}>A PROPOS</NavLink>
      </div>
    </nav>
  )
}

export default Navbar