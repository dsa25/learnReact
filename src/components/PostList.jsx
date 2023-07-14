import PostItem from "./PostItem"

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <div style={{ textAlign: "center" }}>Посты не найдены</div>
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {posts.map((post, index) => (
        <PostItem remove={remove} post={post} key={post.id} />
      ))}
    </>
  )
}

export default PostList
