import { BrowserRouter } from "react-router-dom"
import AppRouter from "@/components/AppRouter"
import Navbar from "@/components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="row">
          <Navbar />
        </div>
      </header>

      <AppRouter />
    </BrowserRouter>
  )
}

export default App
