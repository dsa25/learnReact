import PostItem from "../components/PostItem"

export default class PostsService {
  static async getAll(limit = 10, page = 1) {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
    let result = await res.json()
    return result
  }
}
