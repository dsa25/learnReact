export default class PostsService {
  static async getAll() {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts")
    return result.json()
  }
}
