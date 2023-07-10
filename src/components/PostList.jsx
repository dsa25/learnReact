import PostItem from "./PostItem"

const PostList = ({posts, title}) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </>
  )
}

export default PostList
