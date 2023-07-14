import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? " active" : "")}
      >
        about
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? " active" : "")}
      >
        posts
      </NavLink>
    </nav>
  )
}

export default Navbar
