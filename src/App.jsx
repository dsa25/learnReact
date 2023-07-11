import { useMemo, useState } from "react"

import Counter from "./components/Counter"
import ClassCounter from "./components/ClassCounter"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import MySelect from "./components/UI/select/MySelect"
import MyInput from "./components/UI/input/MyInput"

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "abc", body: "testss 111" },
    { id: 2, title: "ccc 2", body: "upload 22" },
    { id: 3, title: "bbb 3", body: "dd deploy 33" }
  ])

  const [selectedSort, setSelectedSort] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const sortedPosts = useMemo(() => {
    console.log("search....")
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    )
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <>
      <div className="row">
        {/* <Counter /> */}
        <ClassCounter />

        <PostForm create={createPost} />

        <hr style={{ margin: "15px 0" }} />
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" }
          ]}
        />

        {sortedAndSearchedPosts.length ? (
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="List posts one"
          />
        ) : (
          <div style={{ textAlign: "center" }}>Посты не найдены</div>
        )}
      </div>
    </>
  )
}

export default App
