import { Route, Routes } from "react-router-dom"

// import { routes } from "@/router"

import Posts from "@/pages/Posts"
import PostIdPage from "@/pages/PostIdPage"
import About from "@/pages/About"
import Error from "@/pages/Error"

function AppRouter() {
  //   console.log(routes)
  return (
    <Routes>
      <Route path="/*" element={<Error />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:idPost" element={<PostIdPage />} />
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
