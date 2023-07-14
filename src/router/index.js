import Posts from "@/pages/Posts"
import PostIdPage from "@/pages/PostIdPage"
import About from "@/pages/About"
import Error from "@/pages/Error"

export const routes = [
  { path: "/*", component: Error },
  { path: "/about", component: About },
  { path: "/posts", component: Posts },
  { path: "/", component: Posts },
  { path: "/post/:idPost", component: PostIdPage }
]
