import { useState } from "react"

import Counter from "./components/Counter"
import ClassCounter from "./components/ClassCounter"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import MyModal from "./components/UI/MyModal/MyModal"
import MyButton from "./components/UI/button/MyButton"
import { usePosts } from "./hooks/usePosts"

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "abc", body: "testss 111" },
    { id: 2, title: "ccc 2", body: "upload 22" },
    { id: 3, title: "bbb 3", body: "dd deploy 33" }
  ])

  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

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

        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="List posts one"
        />
      </div>
    </>
  )
}

export default App
