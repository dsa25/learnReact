import MyButton from "@/components/UI/button/MyButton"
import MyInput from "@/components/UI/input/MyInput"
import { useContext } from "react"
import { AuthContext } from "@/context"

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem("auth", true)
  }

  return (
    <div className="row">
      <form onSubmit={login} className="form">
        <MyInput type="text" placehoder="login" />
        <MyInput type="password" placehoder="password" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login
