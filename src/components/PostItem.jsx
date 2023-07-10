const PostItem = (props) => {
    console.log(props);
    return (
      <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id} {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <button>delete</button>
      </div>
    )
}

export default PostItem