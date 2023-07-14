import { useNavigate } from "react-router-dom"
import MyButton from "./UI/button/MyButton"

const PostItem = (props) => {
  const navigate = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="wr_btns">
        <MyButton
          onClick={() => {
            console.log("open")
            navigate(`/posts/${props.post.id}`)
          }}
          style={{ marginRight: 10 }}
        >
          Open
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
      </div>
    </div>
  )
}

export default PostItem
