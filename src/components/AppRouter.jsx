import { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

// import { routes } from "@/router"

import Posts from "@/pages/Posts"
import PostIdPage from "@/pages/PostIdPage"
import About from "@/pages/About"
import Error from "@/pages/Error"
import Loader from "@/components/UI/Loader/Loader"
import Login from "@/pages/Login"
import { AuthContext } from "@/context"

function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext)

  console.log("auth: " + isAuth)

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "30px" }}
      >
        <Loader />
      </div>
    )
  }

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:idPost" element={<PostIdPage />} />
          <Route path="/login" element={<Navigate to="/posts" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter

// import { routes } from "@/router"

// function AppRouter() {
//   console.log(routes)
//   return (
//     <Routes>
//       {routes.map((route) => (
//         <Route
//           key={route.path}
//           element={<route.component />} // element={<Posts />}
//           path={route.path}
//         />
//       ))}
//     </Routes>
//   )
// }
