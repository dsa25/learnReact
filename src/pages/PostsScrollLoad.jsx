import { useEffect, useRef, useState } from "react"

import PostList from "@/components/PostList"
import PostForm from "@/components/PostForm"
import PostFilter from "@/components/PostFilter"
import MyModal from "@/components/UI/MyModal/MyModal"
import MyButton from "@/components/UI/button/MyButton"
import MySelect from "@/components/UI/select/MySelect"
import MyPagination from "@/components/UI/pagination/MyPagination"
import PostsService from "@/API/PostsService"
import Loader from "@/components/UI/Loader/Loader"
import { usePosts } from "@/hooks/usePosts"
import { useFetching } from "@/hooks/useFetching"
import { useObserver } from "@/hooks/useObserver"
import { getPageCount } from "@/utils/pages"

function PostsScrollLoad() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [totalPages, setTotalPages] = useState(10)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    let newPosts = await PostsService.getAll(limit, page)
    setPosts([...posts, ...newPosts])
    const totalCount = 100
    setTotalPages(getPageCount(totalCount, limit))
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const changePage = (newPage) => {
    if (newPage !== page) {
      // setPage(newPage)
      console.log(newPage)
      return
    }
  }

  const lastElement = useRef()

  useObserver(lastElement, isPostsLoading, page < totalPages, () => {
    setPage(page + 1)
    console.log(page)
  })

  useEffect(() => {
    fetchPosts()
    console.log("useEffect")
  }, [page, limit]) // отслеживаем текущую страницу, при изменении page будет запрос

  return (
    <>
      <div className="row">
        <MyButton style={{ marginTop: 20 }} onClick={() => setModal(true)}>
          create post
        </MyButton>

        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter} />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p> идикация : </p>
          <MyPagination
            countPages={totalPages}
            page={page}
            setPage={changePage}
          />
        </div>

        {postError && <h1>Произошла ошибка {postError}</h1>}

        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="List posts one"
        />
        <div
          ref={lastElement}
          style={{ background: "red", height: 20, marginBottom: 30 }}
        ></div>

        {isPostsLoading && (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <Loader />
          </div>
        )}
      </div>
    </>
  )
}

export default PostsScrollLoad
