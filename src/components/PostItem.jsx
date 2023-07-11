const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <button onClick={() => props.remove(props.post)}>delete</button>
    </div>
  )
}

export default PostItem
