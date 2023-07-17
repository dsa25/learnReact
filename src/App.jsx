import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "@/components/AppRouter"
import Navbar from "@/components/Navbar"
import { AuthContext } from "@/context"

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading
      }}
    >
      <BrowserRouter>
        <header>
          <div className="row">
            <Navbar />
          </div>
        </header>

        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
