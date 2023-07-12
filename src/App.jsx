import { useEffect, useState } from "react"

import Counter from "./components/Counter"
import ClassCounter from "./components/ClassCounter"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import MyModal from "./components/UI/MyModal/MyModal"
import MyButton from "./components/UI/button/MyButton"
import { usePosts } from "./hooks/usePosts"
import PostsService from "./API/PostsService"
import Loader from "./components/UI/Loader/Loader"
import { useFetching } from "./hooks/useFetching"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    let posts = await PostsService.getAll()
    setPosts(posts)
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  useEffect(() => {
    fetchPosts()
    console.log("useEffect")
  }, [])

  return (
    <>
      <div className="row">
        {/* <Counter /> */}
        <ClassCounter />

        <MyButton onClick={() => setModal(true)}>create post</MyButton>

        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h1>Произошла ошибка {postError}</h1>}
        {isPostsLoading ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <Loader />
          </div>
        ) : (
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="List posts one"
          />
        )}
      </div>
    </>
  )
}

export default App
