import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
    AppState.older = res.data.older
    AppState.newer = res.data.newer
  }

  async likePost(id) {
    await api.post(`api/posts/${id}/like`)
    this.getAll()
  }

  async deletePost(id) {
    await api.delete(`api/posts/${id}`)
    this.getAll()
  }
}
export const postsService = new PostsService()
