import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "@/context"
import { useContext } from "react"

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem("auth")
  }

  return (
    <nav>
      {isAuth ? (
        <>
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
          <Link onClick={logout}>Выйти</Link>
        </>
      ) : (
        <>
          <Link to="/login">войти</Link>
        </>
      )}
    </nav>
  )
}

export default Navbar
