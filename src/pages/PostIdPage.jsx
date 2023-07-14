import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostsService from "@/API/PostsService"
import Loader from "@/components/UI/Loader/Loader"
import { useFetching } from "@/hooks/useFetching"

function PostIdPage() {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPostId, isLoading, error] = useFetching(async () => {
    const post = await PostsService.getPostItem(params.idPost)
    // console.log(post)
    setPost(post)
  })

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const comments = await PostsService.getPostComments(params.idPost)
    // console.log(comments)
    setComments(comments)
  })

  useEffect(() => {
    fetchPostId()
    fetchComments()
    console.log("uEffect")
  }, [])

  return (
    <div className="row">
      {isLoading ? (
        <div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <div className="post">
          <div className="post__content">
            <strong>
              {post.id} {post.title}
            </strong>
            <div>{post.body}</div>
          </div>
        </div>
      )}
      {isComLoading ? (
        <div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <div>
          <hr />
          {comments.map((comm) => (
            <div key={comm.id} style={{ paddingLeft: 15 }}>
              <h5>
                {comm.email} || {comm.id} ||| {comm.name}
              </h5>
              <h6></h6>
              <div style={{ paddingLeft: 15 }}>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostIdPage
