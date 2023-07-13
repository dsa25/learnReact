import MyButton from "./UI/button/MyButton"

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
        <span>{props.post.id}</span>
      </div>
      <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
    </div>
  )
}

export default PostItem
