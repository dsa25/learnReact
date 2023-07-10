import { useState } from 'react'

import Counter  from "./components/Counter"
import ClassCounter from "./components/ClassCounter"
import PostList from "./components/PostList"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS 2', body: 'Description'},
    {id: 3, title: 'JS 3', body: 'Description'},
  ])

  return (
    <>
      <div className="row">
        {/* <Counter /> */}
        <ClassCounter />
        <PostList posts={posts} title="List posts one" />
      </div>
    </>
  )
}

export default App
